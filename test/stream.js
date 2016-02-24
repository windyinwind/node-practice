var http = require('http');

var server = http.createServer(function(req, res){
    var body = '';
    req.setEncoding('utf-8');
    req.on('data',function(chunk){
        body += chunk; 
    })
    req.on('end',function(){
        try{
            console.log(body);
            var json = JSON.parse(body); 
        }catch(e){
            res.statusCode = 400;
            return res.end(e.message);
        }
        console.log(typeof json);
        res.write(typeof json);
        res.end();
    })
});

server.listen(5656);
console.log("server listening at port 5656.")
