var oArquivo = require('fs');
var sCaminhoArquivo = process.argv[2];
var sTexto = oArquivo.readFileSync(sCaminhoArquivo,'utf8');
console.log(sTexto.split('\n').length - 1);