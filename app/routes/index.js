'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');

module.exports = function (app, passport) {

/*	function isLoggedIn (req, res, next) {
		if (req.isAuthenticated()) {
			return next();
		} else {
			res.redirect('/timestamp');
		}
	}*/

	var clickHandler = new ClickHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/timestamp.html');
		});

/*	app.route('/login')
		.get(function (req, res) {
			res.sendFile(path + '/public/login.html');
		});*/
		
	app.route('/timestamp')
		.get(function (req, res) {
			res.sendFile(path + '/public/timestamp.html');
		});
		

	app.route('/logout')
		.get(function (req, res) {
			
			res.redirect('/login');
		});

	app.route('/profile')
		.get(function (req, res) {
			res.sendFile(path + '/public/profile.html');
		});

	app.route('/api/:id')
		.get(function (req, res) {
			res.json(req.user.github);
		});

	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	/*app.route('/api/:id/clicks')
		.get(isLoggedIn, clickHandler.getClicks)
		.post(isLoggedIn, clickHandler.addClick)
		.delete(isLoggedIn, clickHandler.resetClicks);*/
};
