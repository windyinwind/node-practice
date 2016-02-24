var tr = require("trumpet")();
var through = require("through2");

tr.selectAll('.loud',function(elm){
    var loud = elm.createStream();
    loud.pipe(through(function(buff, enc, next){
        this.push(buff.toString().toUpperCase()); 
        next();
    })).pipe(loud);

})

process.stdin.pipe(tr).pipe(process.stdout);
