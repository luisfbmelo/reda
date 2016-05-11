exports.createSlug = function(str) {
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

  return str;
}

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

exports.arrayToLowercase = function(array){
  for (var i = 0; i < array.length; i++) {
      array[i] = array[i].toString().toLowerCase(); 
  }

  return array;
}