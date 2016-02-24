var domain = require('domain');
var d = domain.create();
var fs = require('fs');

d.on('error', function(err) {
      console.log("domain error output");
      console.error(err);
});

d.run(function() {
      fs.readFile('somefile.txt', function (err, data) {
              if (err) throw err;
                  console.log(data);
      });
});
