var connect = require('connect');
var app = connect();
app.use(logger).use(hello);;
app.listen(3000);



function logger(request, response, next){

    console.log('%s %s', request.method, request.url);
    next();

}
function hello(req, res, next){
    res.setHeader("Content-Type",'text/html');
    res.end("<h1>Hello World</h1>");
}
