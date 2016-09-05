
// var fs = require ('fs')
// var path = require ('path')
//
// module.exports = function(directorio, filtro, callback)
//
// fs.readdir(directorio, function(err, data)
// {
//   if (err == true)
//   return callback(err)
//
//   data = data.filter (function(archivo)
//   {
//     return path.extname(archivo) === '.'+filtro
//   }
// )
// callback(null,data)
// }
// )
// }
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

 fs.readdir(dir, function (err, list) {
   if (err)
     return callback(err)

   list = list.filter(function (file) {
     return path.extname(file) === '.' + filterStr
   })

   callback(null, list)
 })
}
