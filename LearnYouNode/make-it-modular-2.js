// var filtro2 = require('./make-it-modular.js')
// var directorio = process.argv[2]
// var filtro = proces.argv[3]
//
// filtro2(function(directorio, filtro, callback)
// {
//   if (err === true)
//   return console.error('Hay un error:',err )
//
//   data.forEach(function(archivo) == ext)
//   {
//     console.log(archivo)
//   }
// })

var filterFn = require('./make-it-modular.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
 if (err)
   return console.error('el error es:', err)

 list.forEach(function (file) {
   console.log(file)
 })
})
