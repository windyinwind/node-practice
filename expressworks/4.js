var express = require('express'),
    path = require('path'),
    bodyparser = require('body-parser'),
    app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.post('/form',function(req, res){
   res.setHeader('content-type', 'text/plain'); 
   var rev =  req.body.str.split('').reverse().join('');
   res.send(rev);

})


var server = app.listen(process.argv[2],function(){
   console.log("App listening at port : " + server.address().port ); 
});

