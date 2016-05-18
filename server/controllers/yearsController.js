const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {

	var includes = [];

	if(req.query.required){
		// Set includes
		includes = [
			{ 
				seperate: true,
				attributes: ['id'], 
				model: models.Resource,
				required: true,
				through: {
		            attributes: []
		        }
			}
		];
	}	

	models.Year.findAll({
		include: includes
	}).then(function(years){
		return res.json({result: years});
	}).catch(function(err){
		return next(err);
	})
};