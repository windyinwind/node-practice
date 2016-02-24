var fs = require('fs'),
    path = require('path'),
    ext = process.argv[3],
    dir = process.argv[2];


fs.readdir(dir, function(err, list){
    if(err){
        console.log(err); 
    }else{
        for(var i = 0; i< list.length; i++){
            var fileName = list[i];
            if(path.extname(fileName) === '.'+ext){
                console.log(fileName) 
            }
        }
    }

})
