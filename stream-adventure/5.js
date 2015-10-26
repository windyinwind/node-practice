var through = require('through2')
var split = require('split')
var counter = 1;
process.stdin.pipe(split()).pipe(through(function(line, encoding, next){
    if(counter%2 == 1) this.push(line.toString().toLowerCase()+'\n')
    if(counter%2 == 0) this.push(line.toString().toUpperCase()+'\n')
    counter++
    next()
})).pipe(process.stdout)
