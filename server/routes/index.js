var routes = function(app){
	app.use('/api/', require('./initial.js'));
	app.use('/api/resources', require('./resources.js'));
	app.use('/api/scripts', require('./scripts.js'));
	app.use('/api/formats', require('./formats.js'));
	app.use('/api/modes', require('./modes.js'));	
	app.use('/api/languages', require('./languages.js'));	
	app.use('/api/years', require('./years.js'));	
	app.use('/api/domains', require('./domains.js'));
	app.use('/api/subjects', require('./subjects.js'));	
	app.use('/api/users', require('./users.js'));
	app.use('/api/news', require('./news.js'));
	app.use('/api/systems', require('./systems.js'));
	app.use('/api/themes', require('./themes.js'));
	app.use('/api/categories', require('./categories.js'));
	app.use('/api/apps', require('./apps.js'));
}

module.exports = routes;