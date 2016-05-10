const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	models.Language.findAll().then(function(langs){
		return res.json({result: langs});
	}).catch(function(err){
		return next(err);
	})
};