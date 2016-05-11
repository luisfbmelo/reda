const fs = require('fs');
var path = require('path');
const config = require('../config/config.json');
const models = require('../models/index');

//
//  Create a unique slug according to existing slugs.
//  If exist, increment with the total of results
//
exports.createSlug = function(str) {
  return new Promise(function(resolve, reject){
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes

    //
    //  Create date for unique
    //
    models.Resource.findOne({
      attributes: [[models.sequelize.fn('COUNT', models.sequelize.col('slug')), 'total_equal']],
      where:{
        slug:{
          like: "%"+str+"%"
        }
      }
    })
    .then(function(resource){
      
      if (resource.total_equal==0){
        resolve(str);
      }else{
        str += "-"+parseInt(resource.dataValues.total_equal);
        resolve(str);
      }
    });
  });
}

//
//  Check file extension and size
//
exports.checkFile = function(file){
  const allowedExt = ["gif","jpeg","jpg","png","rtf", "doc","docx","odt","txt","mp3","wav","wma","jar","ggb","swf","jnlp"];

  if (file.size && file.size>1000000){
    return {error: "Ficheiro não deve exceder os 1MB"};
  }

  if (allowedExt.indexOf(file.extension.toLowerCase())<0){
    return {error: `Extensão .${values.file.extension} não é permitida`};
  }

  return true;
}

//
//  Convert array parcels to lowercase
//
exports.arrayToLowercase = function(array){
  for (var i = 0; i < array.length; i++) {
      array[i] = array[i].toString().toLowerCase(); 
  }

  return array;
}

//
//  Save file to a folder
//
exports.saveFile = function(req, res, folder, blob, name, ext, parentId){
  const timestamp = new Date().getTime();
  const targetFolder = config.files_path+folder;
  const targetFile = path.join(__dirname, "../../"+targetFolder+"/"+folder+"_"+timestamp+"."+ext);

  // Create folder
  createFolder(targetFolder);

  // Write blob to system
  var buf = new Buffer(blob, 'base64'); // decode
  fs.writeFile(targetFile, buf, function(err) {
    if(err) {
      return res.send(err);
    }
  });
}

//
//  Create folder inside path
//
function createFolder(folderPath){
  if (!fs.exists(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}

//
//  Remove files inside directory recursevily
//
exports.rmDir = function(slug) {
  const targetFolder = config.files_path+slug;
  const dirPath = path.join(__dirname, "../../"+targetFolder);
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmDir(filePath);
    }
  fs.rmdirSync(dirPath);
};