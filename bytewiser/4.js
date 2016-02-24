var fs = require('fs'),
    splt = '\n'.charCodeAt(0);

var content = fs.readFileSync(process.argv[2])
var offset = 0;

for(var i =0 ; i<content.length; i++){
    if(content[i] === splt){
        var line = content.slice(offset,i);
        console.log(line);
        offset = i +1;
    }

}

console.log(content.slice(offset, i));
