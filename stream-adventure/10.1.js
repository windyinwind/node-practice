var tr = require("trumpet")();
var through = require("through2");

var loud = tr.select(".loud").createStream();;

loud.pipe(through(function(buff, enc, next ){
    this.push(buff.toString().toUpperCase());
    next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
