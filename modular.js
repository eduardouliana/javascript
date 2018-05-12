var oListar = require('./modularListar');

var sCaminhoArquivo = process.argv[2];
var sExtensao = process.argv[3];

oListar(sCaminhoArquivo, sExtensao, function(err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
}
);
