// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
io = require('socket.io')(server);

util = require("util");							// Utility resources (logging, object inspection, etc)
var path = require("path");

// Routing for static files
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, "public")));
//app.use(express.static('public'));

/**************************************************
** GAME VARIABLES
**************************************************/
Player = require("./Player").Player;			// Player class
players = [];									// Array of connected players
players_avail = [];


var port = process.env.PORT || 3001;

server.listen(port, process.env.IP, function () {
	console.log('Server listening at port %d', port);
});

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

require('./XtttGame.js');

io.on('connection', set_game_sock_handlers);
