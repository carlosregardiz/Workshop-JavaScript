var fs = require('fs')

var archivo = process.argv[2]

fs.readFile(archivo, function(err, data)
{
  var saltos = data.toString().split('\n')
  console.log(saltos.length - 1);
})
