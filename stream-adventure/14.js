var crypto = require('crypto');

var de = crypto.createDecipher('aes256',process.argv[2]);

process.stdin.pipe(de).pipe(process.stdout)
