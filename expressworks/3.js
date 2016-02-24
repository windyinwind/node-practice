var express = require('express'),
    path = require('path'),
    app = express();

app.set('views', process.argv[3] || path.join(__dirname, 'templates'))
app.set('view engine', 'jade');
app.get('/home', function(req, res){
    res.render('index', {date:(new Date).toDateString()});    
})


var server = app.listen(process.argv[2], function(){
    var addr = server.address().address;
    var port = server.address().port;

    console.log("App listen as %s:%s", addr, port);

});
