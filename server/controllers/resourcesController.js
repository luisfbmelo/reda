const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');
const dataUtil = require('../utils/dataManipulation');

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

exports.create = function(req, res, next){
	/*
	{
	  "title": "Media heading",
	  "slug": "media-heading-3",
	  "description": "Are you one of the thousands of Iphone owners who has no idea that they can get free games for their Iphone? It’s pretty cool to download things from Itunes, but with a little research you can find thousands of other places to download from",
	  "format": 1,
	  "author":"Luis Melo",
	  "organization": "Escola X",
	  "email": "geral@luisfbmelo.com",
	  "highlight": false,
	  "exclusive": false,
	  "embed": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/eIho2S0ZahI\" frameborder=\"0\" allowfullscreen></iframe>",
	  "techResources": "asd",
	  "operation": "asdasd",
	  "operation_author": "asdasdasd",
	  "subjects": [1,2],
	  "domains": [1,2],
	  "years": [1,2],
	  "access": 1,
	  "language": 1,
	  "keywords":["tag1","tag2"],
	  "file": {
	    "name": "asd",
	    "extension": "swf"
	  }
	}
	 */
	
	// Check AUTH
	jwtUtil.userExists(req.headers.authorization)
	.then(function(userExists){

		if (userExists){
			//
			//	Check data extension
			//
			const checkData = dataUtil.checkFile(req.body.file);
			if (checkData.error){
				return res.status(403).send(checkData);
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
				
				models.Resource.create({
				    title: req.body.title,
				    slug: dataUtil.createSlug(req.body.title),
				    description: req.body.description,
				    format_id: req.body.format,
				    author: req.body.author,
				    organization: req.body.organization,
				    email: req.body.email,
				    highlight: false,
				    exclusive: req.body.exclusive,
				    embed: req.body.embed,
				    techResources: req.body.techResources,
				    operation: req.body.operation,
				    operation_author: req.body.operation_author,
				    user_id: 1,
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

				    return res.status(200).send(item);
				 })
				 .catch(function(err){
					return res.status(403).send(err);
				});
			});
			//return res.status(200).send("done");
		}else{
			return res.status(401).send({error: 'Not allowed to create this resource1'})
		}
	})
}