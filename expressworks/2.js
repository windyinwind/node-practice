var express = require('express'),
    path = require('path');
    app = express();


app.use(express.static(path.join(process.argv[3] || path.join(__dirname, 'public'))));

app.listen(process.argv[2]);

