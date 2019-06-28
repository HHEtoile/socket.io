var Server = require('socket.io');
var io = new Server(5555);
var cacheData = {};
io.on('connection', function (socket) {
	//接收客户端的消息
    socket.on('msg', function (data) {
        console.log(data);
        debugger
		//第一次连接
		if(!!data['login']){
			cacheData[data['login'].id] = {};
			cacheData[data['login'].id].name = data['login'].id.name;
		}else{
			socket.broadcast.emit('msg', {time:new Date(),name:data.name,id:data.id,content:data.content});
		}
    });
});