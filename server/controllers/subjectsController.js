const models = require('../models/index');
const config = require('../config/config.json');

exports.list = function(req, res, next) {

	var includes = [];

	if (req.query.required){
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

	models.Subject.findAll({
		include: includes,
		order: [['title','ASC']]
	}).then(function(Subjects){
		return res.json({result: Subjects});
	}).catch(function(err){
		return next(err);
	})
	
};

exports.listWithDomains = function(req, res, next) {
	// Set includes
	var includes = [
		{ seperate: true, model: models.Domain }
	];

	//var filter = { title: { like: '%gone%'}, 'Author.name' : { like : '%paul%' } };

	models.Subject.findAll({ 
		include: includes,
		order: [['title','ASC']]
	})
	.then(function(subjects){
		return res.json({result: subjects});
	})
	.catch(function(err){
		return next(err);
	})
};