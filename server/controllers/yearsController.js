const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	models.Year.findAll().then(function(years){
		return res.json({result: years});
	}).catch(function(err){
		return next(err);
	})
};