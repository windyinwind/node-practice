var jade = require('jade');
var template = 'strong #{message}';
var context = {message : 'hello jade'};
var fn = jade.compile(template);
console.log(fn(context));


template = 'a(href = url) Baidu';
context = {url : "http://www.baidu.com"};
fn  = jade.compile(template);
console.log(fn(context));


