const debug = require('debug')('app');
const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');
const dataUtil = require('../utils/dataManipulation');
const validate = require('../utils/validateScripts').validate;
const consts = require('../config/const');

//
//	Get details from script
//
exports.details = function(req, res, next){
	var resource = req.params.resource;
	var userExists = req.user;

	// Check AUTH
	var includes = [
		{
			model: models.Subject,
			required:false,
			through: {
				attributes: []
			}			
		},
		{
			model: models.Year,
			required:false,
			through: {
				attributes: []
			}			
		},
		{
			model: models.Domain,
			required:false,
			through: {
				attributes: []
			}			
		}
	];

	// If no user exists, show scripts that are only from exclusive resources
	if (!userExists){
		includes.push({
			model: models.Resource,
			attributes: [],
			where:{
				exclusive: false
			}
		});
	}

	//
	//	Get scripts
	//
	models.Script.findAll({
		include: includes,
		where: {
			resource_id: resource
		}
	})
	.then(function(resource){
		return res.json({result: resource});
	}).catch(function(err){
		return next(err);
	});
}

//
//	Get scripts of a resource that belong to the current user
//
exports.userScripts = function(req, res, next){
	var resource = req.params.resource;
	var setWhere = {};
	var userExists = req.user;

	// Check AUTH
	if (userExists){

		// If admin, get all scripts. 
		// If not, only show from the current user
		if(userExists.Role.value == consts.ADMIN_ROLE){
			setWhere = {
				where: {
					resource_id: resource
				}
			}
		}else{
			setWhere = {
				where: {
					resource_id: resource,
					user_id: userExists.id,
					status: false
				}
			}
		}

		//
		//	Get scripts
		//
		models.Script.findAll(setWhere)
		.then(function(resource){
			return res.json({result: resource});
		}).catch(function(err){
			return next(err);
		});
	}else{
		return res.status(401).send('Not allowed to get scripts from this resource');
	}
}

//
//	Create Script
//
exports.create = function(req, res, next){	
	
	// Check AUTH
	if (userExists){
		//
		//	Check form validation
		//
		const checkData = validate(req.body);
		
		if (dataUtil.scriptsHasErrors(checkData.scripts) || checkData.accept_terms){
			return res.status(403).send({form_errors: checkData});
		}

		//
		//	Create script with everything prepared
		//
		var action = 'create';
		upsertScript(req, res, action, userExists.id, userExists.Role.value);

	}else{
		return res.status(401).send({message: 'Not allowed to create this script1'})
	}
}

//
//	Update Script
//
exports.update = function(req, res, next){	
	
	// Check AUTH
	if (userExists){
		//
		//	Check form validation
		//
		const checkData = validate(req.body);
		
		if (dataUtil.scriptsHasErrors(checkData.scripts) || checkData.accept_terms){
			return res.status(403).send({form_errors: checkData});
		}

		//
		//	Create script with everything prepared
		//
		var action = 'update';
		upsertScript(req, res, action, userExists.id, userExists.Role.value);

	}else{
		return res.status(401).send({message: 'Not allowed to create this script1'})
	}
}

function upsertScript(req, res, action, userId, userRole){

	req.body.scripts.map(function(givenScript){

		if (req.params.resource && action=='update'){

			var setWhere = {};

			// If admin, is allowed to update any. 
			// If not, only update those that the user is the owner
			if(userRole == consts.ADMIN_ROLE){
				setWhere = {
					where: {
						id: givenScript.id,
						resource_id: req.params.resource
					}
				}
			}else{
				setWhere = {
					where: {
						id: givenScript.id,
						user_id: userId,
						resource_id: req.params.resource
					}
				}
			}

			//
			//	Get instance in order to update
			//
			return models.Script.findOne(setWhere)
			.then(function(script){					    

				//
				//	Update script
				//
				return script.updateAttributes({
				    title: givenScript.title,
				    description: givenScript.description,
				    author: givenScript.author,
				    organization: givenScript.organization,
				    email: givenScript.email,		   
				    operation: givenScript.op_proposal,
				    operation_author: givenScript.op_proposal_author,
				  }).then(function(item){			 
				  	script.setSubjects(givenScript.subjects);

				    script.setDomains(givenScript.domains);

				    script.setYears(givenScript.years);

				 })
				 .catch(function(err){
					return res.status(403).send(err);
				});
			})
			.catch(function(err){
				return res.status(403).send(err);
			});

		}else if(req.params.resource && action=='create'){
			
			return models.Script.create({
			    title: givenScript.title,
			    description: givenScript.description,
			    author: givenScript.author,
			    organization: givenScript.organization,
			    email: givenScript.email,		   
			    operation: givenScript.op_proposal,
			    operation_author: givenScript.op_proposal_author,
			    user_id: userId,
			    resource_id: req.params.resource		    
			  },{
			    include: [ models.Domain, models.Subject, models.Year ]
			  }).then(function(item){
			    item.setSubjects(givenScript.subjects);

			    item.setDomains(givenScript.domains);

			    item.setYears(givenScript.years);

			 })
			 .catch(function(err){
				return res.status(403).send(err);
			});
		}else{
			return res.status(403).send('Must provide resource ID');
		}
	});

	return res.status(200).send("Scripts created/updated");
}