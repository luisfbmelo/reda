const debug = require('debug')('app');
const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');
const dataUtil = require('../utils/dataManipulation');
const validate = require('../utils/validateResources').validate;

// Generic Includes
var includes = [
	{ 
		seperate: true, 
		model: models.Rating,
		required:false,
		attributes: []
	},
	{ 
		seperate: true, 
		model: models.Format,
		include: [{
				seperate: true,
  			model: models.Image
  		}]
	}
];

//
//	Return generic lsit of resources
//
exports.list = function(req, res, next) {

	models.Resource.findAll({
		include: includes,
		limit: config.limit,
		where: {
			exclusive: false
		},
  		attributes: [
	  		'title', 
	  		'slug', 
	  		'description', 
	  		'highlight', 
	  		'exclusive', 
	  		'status', 
	  		'created_at', 
	  		'updated_at'
  		]
	})
	.then(function(resources){
		return res.json({result: resources});
	}).catch(function(err){
		return next(err);
	})
};

//
//	Return most recent resources
//
exports.recent = function(req, res, next){
	// Check AUTH
	jwtUtil.userExists(req, res, req.headers.authorization)
	.then(function(userExists){

		// Set scope
		// RECENT - if no auth, show only not exclusive
		// RECENTGENERIC - if with auth, show all
		var scope = userExists ? 'recent' : 'recentGeneric';

		var limit = parseInt(req.query.limit) || 8;

		models.Resource.scope(scope).findAll({
			group: ['Resource.id'],
			include: includes,
			limit: limit,
	  		attributes: [
	  			'id',
		  		'title', 
		  		'slug', 
		  		'description', 
		  		'highlight', 
		  		'exclusive', 
		  		'status', 
		  		'created_at', 
		  		'updated_at',
		  		[models.sequelize.literal('(SELECT AVG(value) FROM Ratings WHERE Ratings.resource_id = Resource.id)'), 'ratingAvg']
	  		]
		})
		.then(function(resources){
			return res.json({result: resources});
		}).catch(function(err){
			return next(err);
		});
	});
}

//
//	List of Resources that are highlights
//
exports.highlight = function(req, res, next){
	models.Resource.scope('highlight').findAll({
		group: ['Resource.id'],
		include: includes,
		limit: config.limit,
  		attributes: [
  			'id',
	  		'title', 
	  		'slug', 
	  		'description', 
	  		'highlight', 
	  		'exclusive', 
	  		'status', 
	  		'created_at', 
	  		'updated_at',
	  		[models.sequelize.literal('(SELECT AVG(value) FROM Ratings WHERE Ratings.resource_id = Resource.id)'), 'ratingAvg']
  		]
	})
	.then(function(resources){
		return res.json({result: resources});
	}).catch(function(err){
		return next(err);
	})
}

//
//	Return list of searched resources
//
exports.search = function(req, res, next){
	//req.body
	//req.query
	//req.param
	// Check AUTH
	jwtUtil.userExists(req, res, req.headers.authorization)
	.then(function(userExists){

		var setWhere = {};
		var likeTags = [];
		
		var limit = parseInt(req.query.limit) || config.limit;
		var page = parseInt(req.query.activePage) || 1;
		var formats = req.query.formats || [];
		var modes = req.query.modes || [];
		var years = req.query.years || [];
		var subjects = req.query.subjects || [];
		var domains = req.query.domains || [];
		var tags = req.query.tags || [];
		var order = dataUtil.extractOrder(req.query.order, models) || null;
		// Check if there is a type of resources (if admin, or personal resources, etc)
		var resourcesType = req.query.type || null;

		// Set the where clause if is there any format
		if (formats.length>0){
			setWhere = {
				format_id: {
					$in: formats
				}				
			}
		}else{
			setWhere = {};
		}

		// Set the tags to search for
		if (tags.length>0){
			for(var tag of tags){
				likeTags.push(
					{
						$or: {
							title: { 
								$like: tag
							}	
						}					
					}
				)
			}
		}

		if (resourcesType){
			switch(resourcesType){
				case 'myresources':
					if (!userExists){
						return res.status(401).send({error: 'Not allowed to access this list of resources'})
					}
					setWhere.user_id = userExists.id;
				break;
			}
		}

		// Set includes
		// SET REQUIRED FALSE in order to avoid INNERJOIN. Good when there is no value to search for and avoid filtering
		// SET SEPERATE in order to run queries seperatly (M:M associations)
		// Since there is a need to disable subqueries due to the use of LIMIT, required must be TRUE
		var includes = [
			{
				model: models.Format,
				required: true,
				include: [{
	  				seperate: true,
		  			model: models.Image
		  		}]
			}
		];

		if (modes.length>0){
			includes.push(
				{
					model: models.Mode,
					required: true,
					where: {
						id: {
							$in: modes
						}
					}
				}
			)
		}

		if (years.length>0){
			includes.push(
				{
					model: models.Year,
					required: true,
					where: {
						id: {
							$in: years
						}
					}
				}
			)
		}

		if (subjects.length>0){
			includes.push(
				{
					model: models.Subject,
					required: true,
					where: {
						id: {
							$in: subjects
						}
					}
				}
			)
		}

		if (domains.length>0){
			includes.push(
				{
					model: models.Domain,
					required: true,
					where: {
						id: {
							$in: domains
						}
					}
				}
			)
		}

		if (tags.length>0){
			includes.push(
				{
					model: models.Tag,
					required: true,
					where: {
						$or: likeTags,				
						type: 'RES'
					},
				}
			)
		}


		var attributes = [
  			'id',
	  		'title', 
	  		'slug', 
	  		'description', 
	  		'highlight', 
	  		'exclusive', 
	  		'status', 
	  		'created_at', 
	  		'updated_at'
  		];

  		// Start literals
  		// 
  		// 	MUST REFER TO as Resource.id IN ORDER TO THE SYSTEM UNDERSTAND THAT THE QUERY REFERS TO THE
  		// 	CURRENT RESOURCE FROM EACH ITERATION
  		// 
		var literals = [
			[models.sequelize.literal('(SELECT AVG(value) FROM Ratings WHERE Ratings.resource_id = Resource.id)'), 'ratingAvg']			
		];

		// If user exists, check if is favorite
		if (userExists){
			literals.push(
				[models.sequelize.literal('(SELECT IF(ISNULL(resource_favorite.resource_id),0,1) FROM resource_favorite LEFT JOIN Users on Users.id = resource_favorite.user_id WHERE resource_favorite.resource_id = Resource.id AND resource_favorite.user_id='+userExists.id+' LIMIT 1)'), 'isFavorite']
			)
		}

		// Set subQuery: false because we have multiple associations, and the limit will give bad results
		// with a DESC ordering.
		// More, it was needed to add require:true to each association that is used while filtering
		models.Resource.findAndCountAll({						
	  		attributes: attributes.concat(literals),
	  		include: includes,
	  		limit: limit,
			offset: ((page-1)*limit),
	  		where: setWhere,
	  		order: [order],
	  		subQuery:false
		})
		.then(function(resources){
			debug(resources);
	
			// findAndCount
			// COUNT - total results without limit and offset
			// ROWS - total results with limit and offset
			return res.json({
				page,
				totalPages: Math.ceil(resources.count/limit),
				limit,
				count: resources.rows.length,
				total: resources.count, 
				result: resources.rows
			});
		}).catch(function(err){
			return next(err);
		})
	});
}

//
//	Get details from resource
//
exports.details = function(req, res, next){
	var slug = req.params.slug;

	// Check AUTH
	jwtUtil.userExists(req, res, req.headers.authorization)
	.then(function(userExists){		

		// Duplicate includes
		var detailsIncludes = includes.slice(0);

		// Set includes
		detailsIncludes.push(
			{ 
				seperate: true, 
				model: models.User,
				required: false,
				as: 'Favorites',
				where: {
					id: userExists.id
				},
				attributes: ["id"],
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.Subject,
				required: false,
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.Domain,
				required: false,
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.Year,
				required: false,
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.Language,
				required: false,
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.Mode,
				required: false,
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.Tag,
				required: false,
				through: {
					attributes: []
				}
			},
			{
				seperate: true, 
				model: models.File,
				required: false
			}
		);

		// Start literals
  		// 
  		// 	MUST REFER TO as Resource.id IN ORDER TO THE SYSTEM UNDERSTAND THAT THE QUERY REFERS TO THE
  		// 	CURRENT RESOURCE FROM EACH ITERATION
  		// 
		var literals = [
			[models.sequelize.literal('(SELECT AVG(value) FROM Ratings WHERE Ratings.resource_id = Resource.id)'), 'ratingAvg']			
		];

		// If user exists, check if is favorite
		if (userExists){
			literals.push(
				[models.sequelize.literal('(SELECT IF(ISNULL(resource_favorite.resource_id),0,1) FROM resource_favorite LEFT JOIN Users on Users.id = resource_favorite.user_id WHERE resource_favorite.resource_id = Resource.id AND resource_favorite.user_id='+userExists.id+' LIMIT 1)'), 'isFavorite']
			)
		}

		models.Resource.findOne({
			group: ['Resource.id'],
			attributes: Object.keys(models.Resource.attributes).concat(literals),
			include: detailsIncludes,
			where: {slug}
		})
		.then(function(resource){
			// Check if is exclusive and user is not loggedin
			if (resource && resource.exclusive==true && !userExists){
				return res.status(401).send({error: 'Not allowed to access this resource'})
			}

			return res.json({result: resource});
		}).catch(function(err){
			return next(err);
		});
	});
}

//
//	Create Resource
//
exports.createOrUpdate = function(req, res, next){	
	
	// Check AUTH
	jwtUtil.userExists(req, res, req.headers.authorization)
	.then(function(userExists){

		if (userExists){
			//
			//	Check form validation
			//
			const checkData = validate(req.body);
			if (Object.keys(checkData).length != 0 && checkData.constructor === Object){
				return res.status(403).send({form_errors: checkData});
			}

			//
			//	Check for existing tags according to provided
			//			
			
			models.Tag.findAll({
				where:{
					title: {
						$in: req.body.keywords
					}
				}
			})
			.then(function(items){

				var existingTags = [];
				var newTags = req.body.keywords;

				//
				//	Replace repeated tags for the ones form DB
				//
				for(var tag of items){
					var index = dataUtil.arrayToLowercase(newTags).indexOf(tag.title.toLowerCase());
					
					if (index>=0){
						newTags.splice(index, 1);
						existingTags.push(tag.id);
					}
				}

				//
				//	Prepare new tags to insert
				//
				newTags.forEach(function(tag, index){
					newTags[index] = {
						title: tag,
						type: 'RES'
					};
				});

				//
				//	Create resource with everything prepared
				//
				var action = req.params.id ? 'update' : 'create';
				upsertResource(req, res, newTags, existingTags, action, userExists.id);
				
			});
			//return res.status(200).send("done");
		}else{
			return res.status(401).send({error: 'Not allowed to create this resource1'})
		}
	})
}

function upsertResource(req, res, newTags, existingTags, action, userId){
	var slug = "";

	//
	//	Create a slug
	//
	dataUtil.createSlug(req.body.title)
	.then(function(str){
		slug = str;

		if (req.params.id && action=='update'){

			//
			//	Get instance in order to update
			//
			return models.Resource.findOne({
				where:{
					id: req.params.id
				}
			})
			.then(function(resource){

				if(resource){
					//
					//	Update resource
					//
					return resource.updateAttributes({
					    title: req.body.title,
					    description: req.body.description,
					    format_id: req.body.format.id,
					    duration: req.body.duration,
					    author: req.body.author,
					    organization: req.body.organization,
					    email: req.body.email,
					    highlight: req.body.highlight,
					    exclusive: req.body.exclusive,
					    embed: req.body.embed,
					    techResources: req.body.techResources,
					    operation: req.body.op_proposal,
					    operation_author: req.body.op_proposal_author,
					  }).then(function(item){			 
					  	resource.setSubjects(req.body.subjects);

					    resource.setDomains(req.body.domains);

					    resource.setYears(req.body.years);

					    resource.setModes(req.body.access);

					    resource.setLanguages(req.body.language);

					    //
					    //	Remove all tags and insert new ones
					    //
					    resource.setTags([]).then(function(){
					    	resource.setTags(existingTags);

						    newTags.forEach(function(tag){
						    	models.Tag.create(tag)
						    	.then(function(newTag){
						    		resource.addTag(newTag);
						    	});		    	
						    })	
					    });
					    

					    //
					    //	Remove all files and insert new ones if there is no ID
					    //		    
					    if (req.body.file && !req.body.file.id){
					    	// Delete all files existing
					    	models.File.destroy({
					    		where:{
					    			resource_id: req.params.id
					    		}
					    	});

					    	//
					    	//	Delete physical files
					    	//
					    	dataUtil.rmDir(resource.dataValues.slug);

					    	//
						    //	Save file to FileSys
						    //
						    dataUtil.saveFile(req, res, resource.dataValues.slug, req.body.file.data, req.body.file.name, req.body.file.extension, req.params.id);

					    	// Create new file
					    	models.File.create({
					    		name: req.body.file.name,
					    		extension: req.body.file.extension
					    	})
					    	.then(function(newFile){
					    		resource.addFile(newFile);
					    	});
					    }
					    return res.status(200).send(item);
					 })
					 .catch(function(err){
						return res.status(403).send(err);
					});
				}
			})
			.catch(function(err){
				return res.status(403).send(err);
			});

		}else if(action=='create'){
			

			return models.Resource.create({
			    title: req.body.title,
			    slug: slug,
			    description: req.body.description,
			    format_id: req.body.format.id,
			    duration: req.body.duration,
			    author: req.body.author,
			    organization: req.body.organization,
			    email: req.body.email,
			    highlight: false,
			    exclusive: req.body.exclusive,
			    embed: req.body.embed,
			    techResources: req.body.techResources,
			    operation: req.body.op_proposal,
			    operation_author: req.body.op_proposal_author,
			    user_id: userId,
			    Files: {
			    	name: req.body.file.name,
			    	extension: req.body.file.extension
			    },
			    Tags: newTags
			  },{
			    include: [ models.Domain, models.Subject, models.Year, models.Mode, models.Language, models.Tag, models.File ]
			  }).then(function(item){
			    item.setSubjects(req.body.subjects);

			    item.setDomains(req.body.domains);

			    item.setYears(req.body.years);

			    item.addMode(req.body.access);

			    item.addLanguage(req.body.language);

			    item.setTags(existingTags);

			    //
			    //	Save file to FileSys
			    //
			    dataUtil.saveFile(req, res, slug, req.body.file.data, req.body.file.name, req.body.file.extension, item.id);

			    return res.status(200).send(item);
			 })
			 .catch(function(err){
				return res.status(403).send(err);
			});
		}

	});
}