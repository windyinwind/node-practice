var url = require("url");
var qs = require("querystring");


var webAddress = prompt();

var waObj = url.parse(webAddress);

var qsObj = qs.parse(waObj.query);

console.log(url.resolve(waObj.protocol+"//"+waObj.hostname+waObj.pathname, qsObj.file));


