var params = process.argv;
var total = 0;
for(var i = 2; i< params.length && !isNaN(params[i]) ;i++){
    total += Number(params[i]);
}
console.log(total);
