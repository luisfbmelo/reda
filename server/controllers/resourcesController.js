const debug = require('debug')('app');
const models = require('../models/index');
const config = require('../config/config.json');
const messages = require('../config/messages.json');
const jwtUtil = require('../utils/jwt');
const dataUtil = require('../utils/dataManipulation');
const validate = require('../utils/validateResources').validate;
const consts = require('../config/const');

// Generic Includes
function initIncludes(){

	return [
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
}

//
//	Return generic lsit of resources
//
exports.list = function(req, res, next) {
	var includes = initIncludes();

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
//	Return a list of related
//
exports.related = function(req, res, next) {
	var includes = initIncludes();

	var resourceSlug = req.params.slug;
	var limit = parseInt(req.query.limit) || 3;

	models.Resource.findOne({
		where: { 
			slug: resourceSlug 
		}
	})
	.then((item) => {
		return models.Resource.findAll({
			include: includes,
			limit: limit,
			where: {
				format_id: item.format_id,
				author: {
					$like: '%'+item.author+'%'
				},
				slug: {
					$not: resourceSlug
				}
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
	var userExists = req.userExists;

	var includes = initIncludes();

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
}

//
//	List of Resources that are highlights
//
exports.highlight = function(req, res, next){
	var includes = initIncludes();
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
	var userExists = req.userExists;

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
					return res.status(401).send({message: messages.resources.access_permission})
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
}

//
//	Get details from resource
//
exports.details = function(req, res, next){
	var slug = req.params.slug;
	var includes = initIncludes();

	// Check AUTH
	var userExists = req.userExists;

	// Duplicate includes
	var detailsIncludes = includes.slice(0);

	if (userExists){
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
			}
		);
	}

	// Set includes
	detailsIncludes.push(
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
		},
		{
			seperate: true, 
			model: models.User,
			required: false,
			attributes: ["name","organization","email"]
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
			return res.status(401).send({message: messages.resource.access_permission})
		}

		return res.json({result: resource});
	}).catch(function(err){
		return next(err);
	});
}

//
//	Create Resource
//
exports.createOrUpdate = function(req, res, next){	
	var userExists = req.userExists;

	// Check AUTH
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
					$in: req.body.tags
				}
			}
		})
		.then(function(items){

			var existingTags = [];
			var newTags = req.body.tags;

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
			var action = req.params.slug ? 'update' : 'create';
			upsertResource(req, res, newTags, existingTags, action, userExists);
			
		});
		//return res.status(200).send("done");
	}else{
		return res.status(401).send({message: messages.resource.create_permission})
	}
}

function upsertResource(req, res, newTags, existingTags, action, userExists){
	// Handle domains to insert
    var domainsToInsert = dataUtil.getDomains(req.body.domains);

    // INIT VARS
	var slug = "";	

	//
	//	Create a slug
	//
	dataUtil.createSlug(req.body.title)
	.then(function(str){
		slug = str;

		// Timestamp to save file
		const timestamp = new Date().getTime();
		var fileName = slug+"_"+timestamp;

		if (req.params.slug && action=='update'){

			//
			//	Get instance in order to update
			//
			return models.Resource.findOne({
				where:{
					slug: req.params.slug
				}
			})
			.then(function(resource){

				if(resource && (resource.user_id==userExists.id || userExists.Role.type==consts.ADMIN_ROLE)){
					fileName = resource.slug+"_"+timestamp;
					debug("");
					//
					//	Update resource
					//
					return resource.updateAttributes({
					    title: req.body.title,
					    description: req.body.description,
					    format_id: req.body.format.id,
					    duration: req.body.duration || null,
					    author: req.body.author,
					    organization: req.body.organization,
					    email: req.body.email,
					    exclusive: req.body.exclusive,
					    embed: req.body.isOnline && req.body.embed!=null ? req.body.embed : null,
					    link: req.body.isOnline && req.body.link!=null ? req.body.link : null,
					    techResources: req.body.techResources,
					    operation: req.body.op_proposal,
					    operation_author: req.body.op_proposal_author

					  }).then(function(item){			 
					  	resource.setSubjects(req.body.subjects);

					    resource.setYears(req.body.years);

					    resource.setModes(req.body.access);

					    resource.setLanguages(req.body.language.id);

					    resource.setDomains(req.body.domains);

					    resource.save();

					    //
					    //	Remove all tags and insert new ones
					    //
					    resource.setTags([]).then(function(){
					    	resource.addTags(existingTags);

						    newTags.forEach(function(tag){
						    	models.Tag.create(tag)
						    	.then(function(newTag){
						    		resource.addTag(newTag);
						    	});		    	
						    })	
					    });

					    if ((!req.body.file || req.body.file.length==0) || req.body.isOnline){
					    	removeFiles(resource);
					    }
					    

					    //
					    //	Remove all files and insert new ones if there is no ID
					    //		    
					    if (req.body.file && req.body.file.data && req.body.file.extension && !req.body.file.id && !req.body.isOnline){
					    	removeFiles(resource);

					    	//
						    //	Save file to FileSys
						    //
						    dataUtil.saveFile(req, res, resource.dataValues.slug, req.body.file.data, fileName, req.body.file.extension, req.params.id);

					    	// Create new file and add reference
					    	models.File.create({
					    		name: fileName,
					    		extension: req.body.file.extension
					    	})
					    	.then(function(newFile){
					    		resource.addFile(newFile);
					    	});
					    }
					    return res.status(200).send(item);
					 })
					 .catch(function(err){
						return res.status(403).send({message: messages.resource.save_error});
					});
				}else{
					return res.status(401).send({message: messages.resource.create_permission});
				}
			})
			.catch(function(err){
				return res.status(403).send({message:err});
			});

		}else if(action=='create'){
			var fileToUpload = {};

			// Save file?
			if (req.body.file!=undefined && req.body.file!=null && req.body.file.name!=null && req.body.file.extension!=null && !req.body.isOnline){
				fileToUpload = {
					name: fileName,
		    		extension: req.body.file.extension				
				}
			}

			return models.Resource.create({
			    title: req.body.title,
			    slug: slug,
			    description: req.body.description,
			    format_id: req.body.format.id,
			    duration: req.body.duration || null,
			    author: req.body.author,
			    organization: req.body.organization,
			    email: req.body.email,
			    highlight: false,
			    exclusive: req.body.exclusive,
			    embed: req.body.isOnline && req.body.embed ? req.body.embed : null,
			    link: req.body.isOnline && req.body.link ? req.body.link : null,
			    techResources: req.body.techResources,
			    operation: req.body.op_proposal,
			    operation_author: req.body.op_proposal_author,
			    user_id: userExists.id,
			    Tags: newTags
			  },{
			    include: [ models.Domain, models.Subject, models.Year, models.Mode, models.Language, models.Tag, models.File ]
			  }).then(function(item){
			    item.setSubjects(req.body.subjects);	    

			    item.setYears(req.body.years);

			    item.setModes(req.body.access);

			    item.setLanguages(req.body.language.id);

			    item.addTags(existingTags);

			    item.setDomains(req.body.domains);

			    //
			    //	Save file to FileSys
			    //
			    if (req.body.file && !req.body.isOnline && req.body.file.data && req.body.file.extension){
			    	// Create new file and add reference
			    	models.File.create(fileToUpload)
			    	.then(function(newFile){
			    		item.addFile(newFile);
			    	});

			    	dataUtil.saveFile(req, res, slug, req.body.file.data, fileName, req.body.file.extension, item.id);	
			    }
			    
			    return res.status(200).send(item);
			 })
			 .catch(function(err){
			 	debug(err);

				return res.status(403).send({message:err});
			});
		}

	});
}



//
//	Delete Resource
//
exports.deleteEl = function(req, res, next){	
	var userExists = req.userExists;

	// Check AUTH
	if (userExists && req.params.slug){

		models.Resource.findOne({
			where: {
				slug: req.params.slug
			}
		}).then((resource) => {

			if (!resource){
				return res.status(403).send({message: messages.resource.no_exist});
			}
			
			if(resource && (resource.user_id==userExists.id || userExists.Role.type==consts.ADMIN_ROLE)){

				//
				//	Delete resource
				//
				resource.destroy()
				.then(() => {
					return res.status(200).send({});
				})
				.catch(function(err){
					return res.status(403).send(err);
				});
				
			}else{
				return res.status(401).send({message: messages.resource.del_permission});
			}
		});
		
	}else{
		return res.status(401).send({message: messages.resource.del_permission});
	}
}

//
//	Delete collective resources
//
exports.deleteCollective = function(req, res, next){	
	var userExists = req.userExists;

	// Check AUTH
	if (userExists){

		if (req.body.resources){		


			models.Resource.findAll({
				where: {
					id: {
						$in: req.body.resources
					}
				}
			}).then((resources) => {

				if (!resources || resources.length==0){
					return res.status(403).send({message: messages.resources.del_no_exist});
				}

				// If user is not admin, check each resource owner
				if (userExists.Role.type!=consts.ADMIN_ROLE){
					resources.forEach(function(item){
						if (item.user_id!=userExists.id){
							return res.status(401).send({message: messages.resources.del_permission});
						}
					})
				}

				// If no error, then destroy all
				models.Resource.destroy({
					where: {
						id: req.body.resources
					}
				})
				.then(() => {
					return res.status(200).send({});
				})
				.catch(function(err){
					return res.status(403).send(err);
				});
			});
		}else{
			return res.status(403).send({message: messages.resources.del_no_exist});
		}
		
	}else{
		return res.status(401).send({message: messages.resources.del_permission});
	}
}

//
//	Remove a given resource files
//
function removeFiles(resource){
	// Delete all files existing
	models.File.destroy({
		where:{
			resource_id: resource.id
		}
	});

	//
	//	Delete physical files
	//
	dataUtil.rmDir(resource.dataValues.slug);
}