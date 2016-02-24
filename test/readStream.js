var fs = require('fs');
var zlib = require('zlib');
var writable = fs.createWriteStream('assert.js.gz');
var z = zlib.createGzip();
var readable = fs.createReadStream('assert.js');
readable.pipe(z).pipe(writable);

