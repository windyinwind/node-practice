var fs = require("fs");

var src = fs.readFileSync("/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt","utf-8");

var sprintf = require("sprintf-js").sprintf,
        vsprintf = require("sprintf-js").vsprintf;
var srcArr = src.split("\n");
srcArr.forEach(function(line, index){
    if(index%5 === 0){
        console.log(sprintf("%3d %s", index,line));
    }else{
        console.log(sprintf("%3s %s",' ',line));
    }
})








