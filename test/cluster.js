var cluster = require('cluster');

var workers = process.env.WORKERS || require('os').cpus().length;
if (cluster.isMaster) {
    console.log("master");

    console.log('start cluster with %s workers', workers);

    for (var i = 0; i < workers; ++i) {
        var worker = cluster.fork().process;
        console.log('worker %s started.', worker.pid);
    }

    cluster.on('exit', function(worker) {
        console.log('worker %s died. restart...', worker.process.pid);
        cluster.fork();
    });

} else {

    console.log("child");
    var http = require('http');
    http.createServer(function (req, res) {
        res.end("Look Mum! I'm a server!\n");
    }).listen(4000, "127.0.0.1");

}

process.on('uncaughtException', function (err) {
      console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
      console.error(err.stack)
      process.exit(1)
})
