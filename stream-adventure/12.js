var duplexer = require("duplexer2");
var through = require('through2');

module.exports = function(counter){
    var res = {};
    var input = through.obj(write, end);

    function write(row, enc, next){
        res[row.country] = (res.country || 0) +1;
        next();
    }

    function end(done){
        counter.set(res); 
        done();
    }

    return duplexer(input, counter);
}
