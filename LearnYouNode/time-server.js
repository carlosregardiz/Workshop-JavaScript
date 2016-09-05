// 9933181198
// Marco
//
// carne, pollo frijo, queso de hebra

var net = require('net')

function zeroFill(i) {
 return (i < 10 ? '0' : '') + i
}
function now () {
 var datos = new Date()
 return datos.getFullYear() + '-'
   + zeroFill(datos.getMonth() + 1) + '-'
   + zeroFill(datos.getDate()) + ' '
   + zeroFill(datos.getHours()) + ':'
   + zeroFill(datos.getMinutes())
}

var server = net.createServer(function (socket) {
 socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
