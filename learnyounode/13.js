var http = require('http'),
    url = require('url');

function parsetime(timeStr){
    var dJson = {};
    var d = new Date(timeStr);
    dJson.hour = d.getHours();
    dJson.minute = d.getMinutes();
    dJson.second = d.getSeconds();
    return JSON.stringify(dJson); 
}

function toUnix(timeStr){
    var d = new Date(timeStr);
    return JSON.stringify({'unixtime':d.getTime()});   
}

var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url,true);
    res.writeHead(200,{"Content-type":"application/json"});
    switch(urlObj.pathname){
        case '/':
            res.end("Not handled");
            break;
        case '/api/parsetime':
            res.end(parsetime(urlObj.query.iso));
            break;
        case '/api/unixtime':
            res.end(toUnix(urlObj.query.iso));
            break;
    }
});

server.listen(process.argv[2]);
