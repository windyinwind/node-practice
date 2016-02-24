var zlib = require('zlib');
var tar = require('tar');
var fs = require('fs');

var ext = tar.Extract({path:__dirname+'/Extract'}).on('error',function(err){
    console.log("error");
}).on('end',function(){
    console.log("end");
});

var tgf = fs.createReadStream(__dirname+'/redis-stable.tar.gz').on('err',function(){
    console.log("read error");
});


tgf.pipe(zlib.createGunzip()).pipe(ext);



