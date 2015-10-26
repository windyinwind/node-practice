var params = process.argv;
var total = null;
for(var i = 2; i< params.length ;i++){
    total += Number(params[i]);
}
console.log(total);
