var concat = require('concat-stream');
var fs = require("fs");

var fsm = fs.createReadStream("./data.json");

fsm.pipe(concat(function(res){
     res.split("");
     console.log(Buffer.isBuffer(res));
     var jdata = JSON.parse(res);
     console.log(jdata);
}))
