
var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.status(200).send('socket.io');
});
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection',function(socket){
    console.log('客户端已经连接');
});
server.listen(80)