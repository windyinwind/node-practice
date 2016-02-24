function foo(){
    quux = 10;
    var bar = false;
    function zip(){
        bar = true;
        var quux = 'da'; 
    }
   return zip;
}
