var buf = new Buffer("hello world",'utf8' );
var buf1 = new Buffer("你好",'utf8' );
console.log(buf);
console.log(buf.length);
console.log(buf.toString('utf8'));
console.log("isEncoding "+ Buffer.isEncoding(buf));
console.log("byteLength "+ Buffer.byteLength(buf));

console.log("-----------------------------")
var concatedBufferArray = [buf, buf1];
var concatedBuffer = Buffer.concat(concatedBufferArray);
console.log(concatedBuffer);
console.log("isEncoding "+ Buffer.isEncoding(concatedBuffer));
console.log("byteLength "+ Buffer.byteLength(concatedBuffer));
    
console.log("-----------------------------")

console.log(concatedBufferArray);
var sortRel = concatedBufferArray.sort(Buffer.compare);
console.log(sortRel);

