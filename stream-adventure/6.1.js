var concat = require("concat-stream");
process.stdin.pipe(concat(function(ctnt){
    var res =   ctnt.toString().split('').reverse().join('');
    console.log(res);
}))
