var socketio = require('socket.io');
var http = require('http');
var formidable = require('formidable');

var server = http.createServer(function(req, res){
    switch (req.method) {
        case 'GET':
            show(req, res);
            break;
        case 'POST':
            upload(req, res);
            break;
    }
});
server.listen(3000);
io = socketio.listen(server);


// helper function
function show(req, res) {
    var html = ''
        + "<script src='/socket.io/socket.io.js' type='text/javascript'></script>"
        + '<script src="http://code.jquery.com/jquery-1.8.0.min.js" type="text/javascript"></script>'
        + '<form method="post" action="/" enctype="multipart/form-data">'
        + '<p><input type="text" name="name" /></p>'
        + '<p><input id="file" type="file" name="file" /></p>'
        + '<p><input type="submit" value="Upload" /></p>'
        + '</form>'
        + '<script>$(document).ready(function(){var socket = io.connect();socket.on("uploadPct",function(res){alert(res);$("#file").append(res);})})</script>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}
function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad Request: expecting multipart/form-data');
        return;
    }

    var form = new formidable.IncomingForm();
    form.on('field', function(field, value){
        console.log(field);
        console.log(value);
    });
    form.on('file', function(name, file){
        console.log(name);
        // file uplaod to /tmp by defaul
        console.log(file);
    });
    form.on('end', function(){
        res.end('upload complete!');
    });
    form.on('progress', function(bytesReceived, bytesExpected){
        var percent = Math.floor(bytesReceived / bytesExpected * 100);
        showUpoadPct(percent);
        console.log(percent);
    });

    form.parse(req);

}
function showUpoadPct(percent){
    io.emit('uploadPct',percent+'%');
}
function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

