var ping = '.'.charCodeAt(0), pong = '!'.charCodeAt(0);

process.stdin.on('data', function(buf){
    for(var i in buf){
        if(buf[i] == 46){
            //buf.write('!',i,1,'ascii')
            buf[i] = pong;
        }
    }
    console.log(buf);
})


