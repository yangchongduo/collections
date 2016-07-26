var http = require('http')
var fs = require('fs');
var path = require('path');
var io = require('socket.io')
var httpServer = http.createServer(function (req, res) {
    var url = req.url;
    var file = path.resolve(__dirname, 'index.html');
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
            res.write('404');
            res.end()
        } else {
            res.writeHead(200, {'content-type': 'text/html;charset=uf-8'});
            res.write(data);
            res.end()
        }

    })
})
httpServer.listen(8080, function () {
    console.log('ok')
});
var socket = io.listen(httpServer);//相当于在http的上面升级了
socket.on('connection', function (socket) {//连接对象 socket对象
//有人通过
//    console.log('有人进来了')
    socket.emit('hello', '欢迎')
   /* socket.on('hellotoo',function(data){
        console.log(data)
    })*/
    socket.broadcast.emit('a', '有新的人进来了')
})