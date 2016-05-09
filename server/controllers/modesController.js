const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	models.Mode.findAll().then(function(modes){
		return res.json(modes);
	}).catch(function(err){
		return next(err);
	})
};