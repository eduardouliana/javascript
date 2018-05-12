var oArquivo = require('fs');
var oDiretorio = require('path');

var ListarTudo = function(dirname, ext, callback) {
  var sExtensao = "." + ext;
  oArquivo.readdir(dirname, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      result = [];
      files.forEach(function(entry) {
        if (oDiretorio.extname(entry) == sExtensao) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });
  
};

module.exports = ListarTudo;
