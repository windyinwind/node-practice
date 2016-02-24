exports.parse = function(str){
    var strArr = str.split("\n");
    return strArr.map(function(item){
        return JSON.parse(item);        
    })
}

exports.stringify = function(arr){
    return arr.reduce(function(pre, nex){
        if(pre === "")return pre + JSON.stringify(nex);         
        return pre + "\n" + JSON.stringify(nex);         
    },"")
}
