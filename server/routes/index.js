var express = require('express');
var router = express.Router();

var routes = function(app){
	app.use('/', require('./initial.js'));
	app.use('/users', require('./users.js'));
	app.use('/news', require('./news.js'));
}

module.exports = routes;