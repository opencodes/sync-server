var express = require('express');
var http = require('http');
var path = require('path');
var io = require('socket.io');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('jsonp callback name', 'jsonCallback');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var server = http.createServer(app);
io = io.listen(server);

require('./routes')(app);

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
// store messages
var messages = [];
// Define a message handler
io.sockets.on('connection', function (socket) {
  socket.on('message', function (msg) {
    var msg = JSON.parse(msg);
    socket.broadcast.emit(msg.action, msg);    
  });  
  // send messages to new clients
  messages.forEach(function(msg) {
    //socket.send(msg);
  })
});