var fs = require('fs');
var fname = process.argv[2];
    
fs.readFile(fname,{'encoding':'utf8'},function(err, data){
    if(err){
        console.log(err);
    }else{ 
      var line = data.split('\n').length -1;   
      console.log(line);
    }

});
