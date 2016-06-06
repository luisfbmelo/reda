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

	models.Theme.findAll({
		include: includes,
		order: [['title','ASC']]
	}).then(function(themes){
		return res.json({result: themes});
	}).catch(function(err){
		return next(err);
	})
};