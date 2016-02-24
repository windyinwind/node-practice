process.stdin.once('data',function(buf){
    var ui8 = new Uint8Array(buf);
    console.log(JSON.stringify(ui8));
})
