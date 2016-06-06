const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	// Set scope
	var scope = "";
	var needsModel = null;
	if (req.query.type){
		switch(req.query.type){
			case "try":
				scope = "try";
				needsModel = models.Link;
				break;
			case "recomended":
				scope = "recommended";
				needsModel = models.Link;
				break;
			case "apps":
				scope = "apps";
				needsModel = models.App;
				break;
			case "feedback":
				scope = "feedback";
				break;
		}
	}

	

	var includes = [];

	if(req.query.required && needsModel){
		// Set includes
		includes = [
			{ 
				seperate: true,
				model: needsModel,
				required: true,
				through: {
		            attributes: []
		        }
			}
		];
	}	

	models.Category.scope(scope).findAll({
		include: includes,
		order: [['title','ASC']]
	}).then(function(categories){
		return res.json({result: categories});
	}).catch(function(err){
		return next(err);
	})
};