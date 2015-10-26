var https = require('https');
var fs = require("fs");
var todo = require('./todo_list.js');
var qs = require('querystring');
var items = [];
var options ={
    key : fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./key-cert.pem')
}
var server = https.createServer(options, function(req, res){
    if ('/' == req.url) {
        switch (req.method) {
            case 'GET':
                show(res);
                console.log("get");
                break;
            case 'POST':
                add(req, res);
                console.log("post");
                break;
            default:
                todo.badRequest(res);
        }
    } else {
        todo.notFound(res);
    }
});
server.listen(3000);

function add(req, res) {
    var body = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){ body += chunk });
    req.on('end', function(){
        var obj = qs.parse(body);
        items.push(obj.item);
        show(res);
    });
}
function show(res) {
    var html = '<h1>Todo List</h1>'
        + '<ul>'
        + items.map(function(item){
            return '<li>' + item + '</li>'
        }).join('')
    + '</ul>'
        + '<form method="post" action="/">'
        + '<p><input type="text" name="item" /></p>'
        + '<p><input type="submit" value="Add Item" /></p>'
        + '</form>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}
