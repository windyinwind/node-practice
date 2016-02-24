var input = process.argv.slice(2).map(Number);
console.log(new Buffer(input).toString('hex'));
