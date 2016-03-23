'use strict';

var path = process.cwd();

//var timeHandler = require(path + '/app/controllers/timekHandler.server.js');


module.exports = function(app, passport) {

  /*	function isLoggedIn (req, res, next) {
  		if (req.isAuthenticated()) {
  			return next();
  		} else {
  			res.redirect('/timestamp');
  		}
  	}*/




  app.route('/')
    .get(function(req, res) {
      res.sendFile(path + '/public/timestamp.html');
    });


  /*	app.route('/timestamp')
		 .post(function(req, res) {
		 	var x = req.body.split('');
     //console.log(res.send(req.body.str.split('').reverse().join('')));
     console.log(x);
     res.sendFile(path + '/public/timestamp.html');
    })*/

  /*	app.route('/login')
  		.get(function (req, res) {
  			res.sendFile(path + '/public/login.html');
  		});*/
/*  app.route('/timestamp/')

  .get(function(req, res) {

    res.sendFile(path + '/public/timestamp.html');
  });*/


  function getTime(time) {
    time = allNumbers(time);
    var d = new Date(time);
    var month = getMonth(d.getMonth());
    var day = d.getDay();
    var year = d.getFullYear();
    var formattedTime = {};
    formattedTime.unix = d.getTime() / 1000;
    formattedTime.natural = month + " " + day + ", " + year;
    if (isNaN(formattedTime.unix)) {
      return 1;
    }

    return formattedTime;
  }

  function getMonth(month) {
    switch (month) {
      case 0:
        return "January";

      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";

    }

  }

  function allNumbers(time) {
    time = time.split('');
    for (var i = 0; i < time.length; i++) {
      if (isNaN(time[i])) {
        return time.join('');
      }
    }
    time = time.join('') * 1000;
    return time;
  }
  app.route('/:time')

  .get(function(req, res) {
    var query = getTime(req.params.time);
    if (query === 1) {
      res.sendFile(path + '/public/timestamp.html');
    } else {
      res.send(query);
    }
  });




  
};