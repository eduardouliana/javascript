var oArquivo = require('fs');
var sCaminhoArquivo = process.argv[2];
var Assincrono = function(err, data) {  
    console.log(data.split('\n').length - 1);
  };
  
oArquivo.readFile(sCaminhoArquivo, 'utf8', Assincrono);