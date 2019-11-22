'use strict';

const controller = require("./controller");

module.exports = function(app) {
	app.route("/api/login")
		.post(controller.login);
	app.route('/api/logout')
		.post(controller.logout);
	app.route("/api/users")
		.get(controller.activeUsers);
	app.route("/rooms")
		.get(controller.getRooms);
	app.route("/room/:roomId")
		.get(controller.getRoomById)
}