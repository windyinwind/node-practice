var hogan = require("hogan.js");
var template = 'The Message is :{{message}}';
var context = {message : "Hholy hua la"};
var template = hogan.compile(template);
console.log(template.render(context));
