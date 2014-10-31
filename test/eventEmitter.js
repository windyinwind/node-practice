var event = require('events');
var chanel = new events.EventEmitter();

chanel.on('join',function(){

    console.log("Welcome!!");
});

chanel.emit('join');
