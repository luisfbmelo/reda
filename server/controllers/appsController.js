const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	var includes = [];

	// Set includes
	includes = [
		{ 
			seperate: true, 
			model: models.Theme,
			required: true,
			through: {
	            attributes: []
	        }
		},
		{ 
			seperate: true, 
			model: models.System,
			required: true,
			through: {
	            attributes: []
	        }
		},
		{ 
			seperate: true, 
			model: models.Category,
			required: true,
			through: {
	            attributes: []
	        }
		}
	];
	
	models.App.findAll({
		include: includes,
		order: [['title','ASC']]
	}).then(function(languages){
		return res.json({result: languages});
	}).catch(function(err){
		return next(err);
	})
	
};

export.search = function(req, res, next) {

}