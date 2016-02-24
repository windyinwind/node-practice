var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books',function(req, res){
    fs.readFile(process.argv[3],function(err, content){
        if(err) return res.setStatus(500);
        try{
            json = JSON.parse(content); 
        }catch(e){
            res.setStatus(500); 
        }
        res.json(json);
    }) 
})

app.listen(process.argv[2]);
