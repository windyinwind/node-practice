var ndj = require("./ndjson.js");
var a = prompt();
console.log(ndj.parse(a));

var b = prompt();
console.log(ndj.stringify(b));
