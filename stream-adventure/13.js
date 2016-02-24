var combine = require('stream-combiner');
var split = require('split');
var zlib = require('zlib');
var through = require('through2').obj;


module.exports = function(){
    var res ; 
    return combine(split(), through(function(row, enc, next){
        if(row.length === 0) return next();
        row = JSON.parse(row); 
        if(row.type === 'genre'){
            if(res){
                this.push(JSON.stringify(res)+'\n') 
            }
            res = {name: row.name, books:[]};
        }else if(row.type === 'book'){
            res.books.push(row.name);
        }
        next();
    },function(done){
        if(res){
            this.push(JSON.stringify(res)+'\n'); 
        }
        done();
    }),zlib.createGzip());
}


