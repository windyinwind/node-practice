var express = require('express');

var server = express();

server.get('/home',function(req, res){
    res.end('Hello World!');
})


server.listen(process.argv[2]);


