const debug = require('debug')('app');
const fs = require('fs');
const mkdirp = require('mkdirp');
const stream = require('stream');
const path = require('path');
const config = require('../config/config.json');
const models = require('../models/index');

//
//  Create a unique slug according to existing slugs.
//  If exist, increment with the total of results
//
exports.createSlug = function(str, model) {
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
    model.findOne({
      attributes: [[models.sequelize.fn('COUNT', models.sequelize.col('slug')), 'total_equal']],
      where:{
        slug:{
          like: "%"+str+"%"
        }
      }
    })
    .then(function(result){
      
      if (result.dataValues.total_equal==0){
        resolve(str);
      }else{
        str += "-"+parseInt(result.dataValues.total_equal);
        resolve(str);
      }
    });
  });
}

//
//  Check file extension and size
//
exports.checkFile = function(file){
  const allowedExt = ["psd","gif","jpeg","jpg","png","rtf", "doc","docx","odt","txt","mp3","wav","wma","jar","ggb","swf","jnlp"];

  if (file.size && file.size>150000000){
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
  const targetFile = path.join(__dirname, "../../"+targetFolder+"/"+name+"."+ext);

  // Create folder
  createFolder(targetFolder, function(err){
    debug(err);
    if (!err){
       writeBlob(targetFile, blob);
     }else{
      return res.send(err);
     }
  });

  // Write blob to system
  /*var buf = new Buffer(blob, 'base64'); // decode
  fs.writeFile(targetFile, blob, function(err) {
    if(err) {
      return res.send(err);
    }
  });*/
 
}

function writeBlob(targetFile, blob){
  var buff = new Buffer(blob);
  var wstream = fs.createWriteStream(targetFile);
  wstream.write(blob, 'base64');

  wstream.on('error', function (err) {
    console.log(err);
  });

  wstream.end();
}

//
//  Create folder inside path
//
function createFolder(folderPath,  cb){
  if (!fs.exists(folderPath)) {
    mkdirp(folderPath, function(err){
      if (err) cb({message: "Não foi possível criar a pasta"})
      else cb();
    });
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

//
//  Used more for scripts, check if inner array has any errors
//
exports.scriptsHasErrors = function(scripts){
  var hasErrors = false;
  scripts.map(function(script){
    hasErrors = (Object.keys(script).length != 0 && script.constructor === Object) || hasErrors;
  });

  return hasErrors;
}

//
//  Handle order
//
exports.extractOrder = function(order, models){
  var finalOrder = ['created_at', 'DESC'];

  //
  //  Front-end options
  //
  const ordersPossible = [
    'recent',
    'rating',
    'alfa'
  ];

  const dirsPossible = [
    'asc',
    'desc'
  ];

  //
  //  Database use
  //
  const orders = [
    'created_at',
    'rating',
    'title'
  ];

  const dirs = [
    'asc',
    'desc'
  ];



  if (order){
    // Get matches
    const matchOrder = getMatchingWords(ordersPossible, order);
    const matchDir = getMatchingWords(dirsPossible, order);

    // Get index of those matches with the several options
    const indexOrder = ordersPossible.indexOf(matchOrder[0]);
    const indexDir = dirsPossible.indexOf(matchDir[0]);

    if (indexOrder>=0){

      // IF IS RATING, GET BY AVERAGE
      if (indexOrder==1){
        finalOrder[0] = models.sequelize.literal('ratingAvg');
      }else{
        finalOrder[0] = orders[indexOrder];
      }      
    }

    if (indexDir>=0){
      finalOrder[finalOrder.length-1] = dirs[indexDir];
    }
  }
 
  return finalOrder;
}

//
//  Checked matching words between two arrays of strings
//
function getMatchingWords(words, s) {
    var matches = [],
        regex = new RegExp("(^|[^a-zA-Z0-9])(" + words.join("|") + ")([^a-zA-Z0-9]|$)", "g");

    s.replace(regex, function(match, $1, $2, $3) {
        matches.push($2);
    });

    return matches;
}

//
//  Check if in domains there are any domains to use,
//  or to insert new ones
//
exports.getDomains = function(domains){
  var finalDomains = {
    existing: [],
    new: []
  }

  if (Array.isArray(domains)){
      finalDomains.existing = domains
    }else if((typeof domains === 'string' || domains instanceof String) && domains.length>0){
      newDomains = domains.split(",");

      for(domain of newDomains){
        finalDomains.new.push({title: domain});
      }
    }

    return finalDomains;
}