//console.log(process.argv);
var iSoma = 0;

  for (var iContador = 2; iContador < process.argv.length; iContador++){
    iSoma = iSoma + Number(process.argv[iContador]);
}
  console.log(iSoma);