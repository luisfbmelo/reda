const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {
	if (!req.query.required){
		models.Mode.findAll().then(function(Modes){
			return res.json({result: Modes});
		}).catch(function(err){
			return next(err);
		})
	}else{
		// Set includes
		var includes = [
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

		models.Mode.findAll({
			include: includes
		}).then(function(modes){
			return res.json({result: modes});
		}).catch(function(err){
			return next(err);
		})
	}
};