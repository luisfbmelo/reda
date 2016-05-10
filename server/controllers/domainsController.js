const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	models.Domain.findAll().then(function(domains){
		return res.json({result: domains});
	}).catch(function(err){
		return next(err);
	})
};

exports.listWithSubjects = function(req, res, next) {
	// Set includes
	var includes = [
		{ seperate: true, model: models.Subject }
	];

	//var filter = { title: { like: '%gone%'}, 'Author.name' : { like : '%paul%' } };

	models.Domain.findAll({ include: includes})
	.then(function(domains){
		return res.json({result: domains});
	})
	.catch(function(err){
		return next(err);
	})
};