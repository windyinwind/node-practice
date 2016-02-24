var net = require('net');

var server = net.createServer(function(socket){
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth() + 1;
    if(date < 10) date = '0'+date;
    socket.write(now.getFullYear()+'-'+month+'-'+date+' '+now.getHours()+":"+now.getMinutes());
    socket.data("");
});

server.listen(process.argv[2]);
