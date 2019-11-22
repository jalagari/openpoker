'use strict';

const rooms = [ { id : 1, capacity : 5, smallBlind : 1, bigBlind : 2},
				{ id : 2, capacity : 10, smallBlind : 2, bigBlind : 4}
			];

const users = [];

var controllers = {
	getRooms: function(req, res) {
		res.json(rooms);
	},

	getRoomById: function(req, res) {
		var roomId = parseInt(req.params.roomId);
		if(roomId > 0 && roomId <= rooms.length) {
			res.json(rooms[roomId-1]);
		} else {
			console.log("Invalid room Id " + roomId);
			res.status(404)
				.send("Room not found");
		}
	},
	login: function(req, res) {
		var username = req.body.username;
		console.log(req.body);
		if(username) {
			if(users.indexOf(username) == -1) {
				users.push(username);
				console.log(" user " + username + " logged in");
			} else {
				console.log(" user " + username + " already logged in");
			}
			res.status(200).send();
		} else {
			console.log("Invalid Username " + username);
			res.status(401)
				.send("Invalid username " + username);
		}
	},
	logout: function(req, res) {
		var username = req.query.username;
		var index = users.indexOf(username);
		if(username && index != -1) {
			users.splice(index, 1);
			console.log(" user " + username + " logged out");		
		} else {
			console.log("Invalid Username " + username);
			res.status(401)
				.send("Invalid username " + username);
		}
	},
	activeUsers: function(req, res) {
		res.json(users);
	}
}

module.exports = controllers;