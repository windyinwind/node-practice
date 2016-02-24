var async = require("async");
var fs = require("fs");


function task(cb ){
    console.log(new Date());
    cb(new Error("buxing"))
}
/*
async.retry(3, function(cb, result) {
    console.info(new Date());
    cb('err');
}, function(err, result) {
    // do something with the result
});
*/


async.retry(3, task, function(cb, result){
    //
})
