const debug = require('debug')('app');
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
		

	models.Domain.findAll({
		include: includes,
		order: [['title','ASC']]
	}).then(function(Domains){
		return res.json({result: Domains});
	}).catch(function(err){
		return next(err);
	})
	
};

exports.listWithSubjects = function(req, res, next) {
	// Set includes
	var includes = [
		{ 
			seperate: true, 
			model: models.Subject, 
			through: {
				attributes:[]
			} 
		}
	];

	//var filter = { title: { like: '%gone%'}, 'Author.name' : { like : '%paul%' } };

	models.Domain.findAll({ 
		include: includes,
		order: [['title','ASC']]
	})
	.then(function(domains){
		return res.json({result: domains});
	})
	.catch(function(err){
		return next(err);
	})
};

exports.listFromSubject = function(req, res, next) {
	var subjectId = req.query.subject;

	// Set includes
	var includes = [
		{ 
			seperate: true, 
			model: models.Subject,
			where: {
				id: subjectId
			}
		}
	];

	if (req.query.required){
		includes.push(
			{
				seperate: true,
				attributes: ['id'], 
				model: models.Resource,
				required: true,
				through: {
		            attributes: []
		        }
			}
		)
	}

	debug(includes);

	//var filter = { title: { like: '%gone%'}, 'Author.name' : { like : '%paul%' } };

	models.Domain.findAll({ 
		include: includes,
		order: [['title','ASC']]
	})
	.then(function(domains){
		return res.json({result: domains});
	})
	.catch(function(err){
		return next(err);
	})
};