var fs = require('fs');
var param = process.argv;
var filePath = param[2];

var buf = fs.readFileSync(filePath);
var fileContenet = buf.toString();
/*
var lineNumber = fileContenet.split('\n').length - 1;
*/

var lineNumber = 0;
while(fileContenet.indexOf('\n')!==-1){
   lineNumber++; 
   fileContenet = fileContenet.slice(fileContenet.indexOf('\n')+1);
}
console.log(lineNumber);
