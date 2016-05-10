const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	// Set includes
	var includes = [
		{ seperate: true, model: models.Image }
	];

	models.Format.findAll({ include: includes })
	.then(function(formats){
		return res.json({result: formats});
	})
	.catch(function(err){
		return next(err);
	})
};