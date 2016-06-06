const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {

	var includes = [];

	if(req.query.required){
		// Set includes
		includes = [
			{ 
				seperate: true,
				model: models.App,
				required: true,
				through: {
		            attributes: []
		        }
			}
		];
	}	

	models.System.findAll({
		include: includes,
		order: [['title','ASC']]
	}).then(function(systems){
		return res.json({result: systems});
	}).catch(function(err){
		return next(err);
	})
};