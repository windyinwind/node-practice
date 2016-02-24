var http = require("http");

var proxy = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('okay');
})

proxy.on('connect', function(req, cltSocket, head){
    var srvUrl = url.parse('http://'+ req.url);
    console.log(req);
})

proxy.listen(5555);
