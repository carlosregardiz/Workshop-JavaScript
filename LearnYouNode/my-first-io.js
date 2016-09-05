var fs = require ('fs')

var archivo = fs.readFileSync(process.argv[2])
var saltos = archivo.toString().split('\n')

console.log(saltos.length - 1);
