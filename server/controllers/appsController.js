const debug = require('debug')('app');
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

exports.search = function(req, res, next) {
	var setWhere = {};
	var likeTags = [];
	
	var limit = parseInt(req.query.limit) || config.limit;
	var page = parseInt(req.query.activePage) || 1;
	var categories = req.query.categories || [];
	var themes = req.query.themes || [];
	var system = req.query.system || null;

	if (system==null){
		return res.status(403).send({message: 'Deve escolher um sistema'});
	}

	// Set includes
	// SET REQUIRED FALSE in order to avoid INNERJOIN. Good when there is no value to search for and avoid filtering
	// SET SEPERATE in order to run queries seperatly (M:M associations)
	// Since there is a need to disable subqueries due to the use of LIMIT, required must be TRUE
	var includes = [
		{
			model: models.Image,
			required:false
		}
	];

	if (categories.length>0){
		includes.push(
			{
				seperate: true,
				model: models.Category,
				required: true,
				where: {
					id: {
						$in: categories
					}
				}
			}
		)
	}else{
		includes.push(
			{
				seperate: true,
				model: models.Category,
				required: false
			}
		)
	}

	if (themes.length>0){
		includes.push(
			{
				seperate: true,
				model: models.Theme,
				required: true,
				where: {
					id: {
						$in: themes
					}
				}
			}
		)
	}else{
		includes.push(
			{
				seperate: true,
				model: models.Theme,
				required: false
			}
		)
	}

	includes.push(
		{
			seperate: true,
			model: models.System,
			required: true,
			where: {
				id: {
					$in: system
				}
			}
		}
	)


	// Set subQuery: false because we have multiple associations, and the limit will give bad results
	// with a DESC ordering.
	// More, it was needed to add require:true to each association that is used while filtering
	models.App.findAndCountAll({						
  		attributes: [
  			'id',
	  		'title',
	  		'description',
	  		'slug',
	  		'link',
	  		'image_id'
	  	],
  		include: includes,
  		limit: limit,
		offset: ((page-1)*limit),
		order: [ ['title', 'DESC'] ],
		subQuery: false
	})
	.then(function(apps){
		debug(apps);

		// findAndCount
		// COUNT - total results without limit and offset
		// ROWS - total results with limit and offset
		return res.json({
			page,
			totalPages: Math.ceil(apps.count/limit),
			limit,
			count: apps.rows.length,
			total: apps.count, 
			result: apps.rows
		});
	}).catch(function(err){
		return next(err);
	})
}