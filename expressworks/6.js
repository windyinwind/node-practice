var express = require('express'),
    crypto = require('crypto'),
    app = express();


app.put('/message/:id',function(req, res){
    var msg = crypto.createHash('sha1').update((new Date).toDateString() + req.params.id).digest('hex');
    res.send(msg);
})


app.listen(process.argv[2]);


