var Widget = require('widget');
var w = Widget();
w.appendTo(document.body);

w.on('message', function (msg) {
    console.log('sending message: ' + msg);
});

