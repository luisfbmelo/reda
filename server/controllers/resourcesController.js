const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	models.Resource.findAll().then(function(resources){
		return res.json(resources);
	}).catch(function(err){
		return next(err);
	})
};

exports.search = function(req, res, next){
	
}