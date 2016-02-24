var http = require('http');

var server = http.createServer(function(req, res){
    var reqData = '';
    if(req.method === 'POST'){
        req.on('data',function(chunk){
            reqData += chunk.toString(); 
        })
        req.on('end',function(){
            res.writeHead(200,{'content-type':'text/plain'});
            res.end(reqData.toUpperCase());
        
        })
    }else{
        //console.log(); 
    }
     

});

server.listen(Number(process.argv[2]));
