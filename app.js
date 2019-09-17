var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var sql = require("./sql.js");
var nStatic = require('node-static');
var fileServer = new nStatic.Server('./views');

app.listen(3000);
console.log("running on port NO:3000");

function handler (req, res) {
     fileServer.serve(req, res);;
};

io.sockets.on('connection', function (socket) {
   socket.on('add-user', function(name,pinno,email,password,address){ 
   	console.log(password, address)
   sql.sql.function1(name,pinno,email,password,address)
   });
});





 