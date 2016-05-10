const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	models.Subject.findAll().then(function(subjects){
		return res.json({result: subjects});
	}).catch(function(err){
		return next(err);
	})
};

exports.listWithDomains = function(req, res, next) {
	// Set includes
	var includes = [
		{ seperate: true, model: models.Domain }
	];

	//var filter = { title: { like: '%gone%'}, 'Author.name' : { like : '%paul%' } };

	models.Subject.findAll({ include: includes})
	.then(function(subjects){
		return res.json({result: subjects});
	})
	.catch(function(err){
		return next(err);
	})
};