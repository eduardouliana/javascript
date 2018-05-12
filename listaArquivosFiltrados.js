var oArquivo = require('fs');
var sCaminhoArquivo = process.argv[2];
var sExtensao = process.argv[3];
var oExpressao = RegExp('\\.' + sExtensao + '$');
var Assincrono = function(err, files) {  
    for (i = 0; i < files.length; i++) {    
		if (oExpressao.test(files[i])) {      
			console.log(files[i]);
		}
	}
};

oArquivo.readdir(sCaminhoArquivo, Assincrono);