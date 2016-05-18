const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	// Set includes
	var includes = [
		{ 
			seperate: true, 
			model: models.Image
		}
	];


	if (req.query.required){
		// Set includes
		includes.push({ 
				seperate: true,
				attributes: ['format_id'],
				model: models.Resource,
				as: 'Resources',
				required: true
			}
		);
	}
	
	models.Format.findAll({
		include: includes
	}).then(function(formats){
		return res.json({result: formats});
	}).catch(function(err){
		return next(err);
	})
	
};