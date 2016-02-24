console.log(process.argv[2]);
var u32i = new Uint32Array(1);
u32i[0] = process.argv[2]

console.log(u32i);

var u16i = new Uint16Array(u32i.buffer);

console.log(JSON.stringify(u16i));








