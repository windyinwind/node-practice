var through = require("through2");
var http = require('http');

var server = http.createServer(function(req, res){
    if(req.method === 'POST'){
        req.pipe(through(function(body,enc, next){
            this.push(body.toString().toUpperCase());  
            next();
        },function(done){done()})).pipe(res);
    }else{
        res.end("post me some data");
    }
    
});


server.listen(process.argv[2]);
