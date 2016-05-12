const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');
const dataUtil = require('../utils/dataManipulation');
const validate = require('../utils/validateResources').validate;

//
//	Return generic lsit of resources
//
exports.list = function(req, res, next) {
	// Set includes
	var includes = [
		{ 
			seperate: true, 
			model: models.Format,
			include: [{
  				seperate: true,
	  			model: models.Image
	  		}]
		}
	];

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
	  		'reserved', 
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
	jwtUtil.userExists(req.headers.authorization)
	.then(function(userExists){

		// Set scope
		// RECENT - if no auth, show only not reserved
		// RECENTGENERIC - if with auth, show all
		var scope = userExists ? 'recent' : 'recentGeneric';

		// Set includes
		var includes = [
			{ 
				seperate: true, 
				model: models.Format,
				include: [{
	  				seperate: true,
		  			model: models.Image
		  		}]
			}
		];

		models.Resource.scope(scope).findAll({
			include: includes,
			limit: 8,
	  		attributes: [
		  		'title', 
		  		'slug', 
		  		'description', 
		  		'highlight', 
		  		'reserved', 
		  		'status', 
		  		'created_at', 
		  		'updated_at'
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
	// Set includes
	var includes = [
		{ 
			seperate: true, 
			model: models.Format,
			include: [{
  				seperate: true,
	  			model: models.Image
	  		}]
		}
	];

	models.Resource.scope('highlight').findAll({
		include: includes,
		limit: config.limit,
  		attributes: [
	  		'title', 
	  		'slug', 
	  		'description', 
	  		'highlight', 
	  		'reserved', 
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
}

//
//	Return list of searched resources
//
exports.search = function(req, res, next){
	//req.body
	//req.query
	//req.param
	// Check AUTH
	jwtUtil.userExists(req.headers.authorization)
	.then(function(userExists){

		var setWhere = {};
		var likeTags = [];
		
		var limit = parseInt(req.query.limit) || config.limit;
		var page = parseInt(req.query.page) || 1;
		var formats = req.query.formats || [];
		var modes = req.query.modes || [];
		var years = req.query.years || [];
		var subjects = req.query.subjects || [];
		var domains = req.query.subjects || [];
		var tags = req.query.tags || [];
		var order = req.query.order || 'created_at';
		var orderDir = req.query.orderDir || 'DESC';

		// Set the where clause if is there any format
		if (formats.length>0){
			setWhere = {
				where: {
					format_id: {
						$in: formats
					}
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
						title: { 
							$like: '%'+tag+'%'
						}
					}
				)
			}
		}


		// Set includes
		// SET REQUIRED FALSE in order to avoid INNERJOIN. Good when there is no value to search for and avoid filtering
		// SET SEPERATE in order to run queries seperatly (M:M associations)
		var includes = [
			{ 
				seperate: true, 
				model: models.Format,
				required: formats.length>0,
				include: [{
	  				seperate: true,
		  			model: models.Image
		  		}]
			},
			{ 
				seperate: true, 
				model: models.Mode,
				required: modes.length>0,
				where: {
					id: {
						$in: modes
					}
				},
			},
			{ 
				seperate: true, 
				model: models.Year,
				required: years.length>0,
				where: {
					id: {
						$in: years
					}
				},
			},
			{ 
				seperate: true, 
				model: models.Subject,
				required: subjects.length>0,
				where: {
					id: {
						$in: subjects
					}
				},
			},
			{ 
				seperate: true, 
				model: models.Domain,
				required: domains.length>0,
				where: {
					id: {
						$in: domains
					}
				},
			},
			{ 
				seperate: true, 
				model: models.Tag,
				required: tags.length>0,
				where: {
					$or: likeTags,				
					type: 'RES'
				},
			},
			{ 
				seperate: true, 
				model: models.User,
				required: false,
				as: 'Favorites',
				where: {
					id: userExists.id
				},
				attributes: ["id"]
			}
		];

		models.Resource.findAndCountAll({
			include: includes,
			limit: limit,
			offset: ((page-1)*limit),
			order: [
				[order, orderDir]
			],
	  		attributes: [
	  			'id',
		  		'title', 
		  		'slug', 
		  		'description', 
		  		'highlight', 
		  		'reserved', 
		  		'status', 
		  		'created_at', 
		  		'updated_at'
	  		],
	  		setWhere
		})
		.then(function(resources){
			// findAndCount
			// COUNT - total results without limit and offset
			// ROWS - total results with limit and offset
			return res.json({
				page,
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
	jwtUtil.userExists(req.headers.authorization)
	.then(function(userExists){

		// Set includes
		var includes = [
			{ 
				seperate: true, 
				model: models.Format,
				include: [{
	  				seperate: true,
		  			model: models.Image
		  		}]
			},
			{ 
				seperate: true, 
				model: models.User,
				required: false,
				as: 'Favorites',
				where: {
					id: userExists.id
				},
				attributes: ["id"]
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
		];

		models.Resource.findOne({
			include: includes,
			where: {slug}
		})
		.then(function(resource){
			// Check if is reserved and user is not loggedin
			if (resource.reserved==true && !userExists){
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
	jwtUtil.userExists(req.headers.authorization)
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