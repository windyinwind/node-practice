var bufArray = [];
process.stdin.on('data',function(buf){
    bufArray.push(buf);
}).on('end',function(){
     
    var len =0;
    for(var i =0; i< bufArray.length; i++){
        len += (bufArray[i]).length;
    }
    
    var all = Buffer.concat(bufArray,len);
    console.log(all);

})
