var http = require('http');
//require('stackup');


var server = http.createServer(function(req, res){
    throw 'test error';

    res.end('Hello world.');

});

server.listen(8080);


