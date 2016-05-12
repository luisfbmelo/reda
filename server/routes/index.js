var routes = function(app){
	app.use('/', require('./initial.js'));
	app.use('/resources', require('./resources.js'));
	app.use('/scripts', require('./scripts.js'));
	app.use('/formats', require('./formats.js'));
	app.use('/modes', require('./modes.js'));	
	app.use('/languages', require('./languages.js'));	
	app.use('/years', require('./years.js'));	
	app.use('/domains', require('./domains.js'));
	app.use('/subjects', require('./subjects.js'));	
	app.use('/users', require('./users.js'));
	app.use('/news', require('./news.js'));
}

module.exports = routes;