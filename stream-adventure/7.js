var http = require('http')
var through = require('through2')

var server = http.createServer(function(req, resp){
    if(req.method === 'POST'){
        req.pipe(through(function(buffer, _, next){
           this.push(buffer.toString().toUpperCase())         
            next()
        })).pipe(resp) 
    }else{
        resp.end("only handle post request") 
    }
})

server.listen(process.argv[2])
