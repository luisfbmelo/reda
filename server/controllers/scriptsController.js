const debug = require('debug')('app');
const models = require('../models/index');
const config = require('../config/config.json');
const messages = require('../config/messages.json');
const jwtUtil = require('../utils/jwt');
const dataUtil = require('../utils/dataManipulation');
const validate = require('../utils/validateScripts').validate;
const consts = require('../config/const');

// INIT Includes
function initIncludes(){

	return [
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
}

//
//	Get details from script
//
exports.details = function(req, res, next){
	var resource = req.params.resource;
	var userExists = req.userExists;
	var includes = initIncludes();

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

	includes.push(
		{
			model: models.User,
			attributes: ['name', 'organization']		
		}
	)

	//
	//	Get scripts
	//
	models.Script.findAll({
		include: includes,
		where: {
			resource_id: resource
		}
	})
	.then(function(scripts){
		return res.json({result: scripts});
	}).catch(function(err){
		debug(err);
		return res.status(403).send({message: err});
	});
}

//
//	Get scripts of a resource that belong to the current user
//
exports.userScripts = function(req, res, next){
	var resource = req.params.resource;
	var setWhere = {};
	var userExists = req.userExists;
	var includes = initIncludes();

	// Check AUTH
	if (userExists){

		// If admin, get all scripts. 
		// If not, only show from the current user
		if(userExists.Role.type == consts.ADMIN_ROLE){
			setWhere = {
				resource_id: resource
			}
			
		}else{
			setWhere = {
				resource_id: resource,
				user_id: userExists.id				
			}
		}

		//
		//	Get scripts
		//
		models.Script.findAll({
			where: setWhere,
			include: includes,
		})
		.then(function(scripts){
			return res.json({result: scripts});
		}).catch(function(err){
			return next(err);
		});
	}else{
		return res.status(401).send({message: messages.scripts.resource_access_permission});
	}
}

//
//	Create Script
//
exports.create = function(req, res, next){	
	var resource = req.params.resource;
	var setWhere = {};
	var userExists = req.userExists;

	// Check AUTH
	if (userExists && resource){
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
		upsertScript(req, res, userExists.id, userExists.Role.type);

	}else{
		return res.status(401).send({message: messages.script.create_permission})
	}
}

function upsertScript(req, res, userId, userRole){

	req.body.scripts.map(function(givenScript){

    	// If a resource is given and this script has ID, then it is an update.
    	// Else, add new one
		if (req.params.resource && givenScript.id){

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
				  	item.setSubjects(givenScript.subjects);

				    item.setYears(givenScript.years);

				    item.setDomains(givenScript.domains);

				 })
				 .catch(function(err){
					return res.status(403).send({message: err});
				});
			})
			.catch(function(err){
				return res.status(403).send({message: err});
			});

		}else if(req.params.resource){
			
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

			    item.setYears(givenScript.years);

			    item.setDomains(givenScript.domains);

			 })
			 .catch(function(err){
				return res.status(403).send({message: err});
			});
		}else{
			return res.status(403).send({message: messages.script.need_resource});
		}
	});

	return res.status(200).send({message: messages.scripts.created_uploaded});
}

//
//	Delete scripts
//
exports.delScript = function(req, res, next){
	debug("Boom");

	var userExists = req.userExists;
	var script = req.params.script;
	var setWhere = {};

	// Check AUTH
	if (userExists && script){

		if (userExists.Role.type!=consts.ADMIN_ROLE){
			setWhere = {
				id: script,
				user_id:userExists.id
			}
		}else{
			setWhere = {
				id: script
			}
		}

		// If no error, then destroy all
		models.Script.destroy({
			where: setWhere
		})
		.then((something) => {
			return res.status(200).send({});
		})
		.catch(function(err){
			return res.status(403).send(err);
		});
		
	}else{
		return res.status(401).send({message: messages.script.del_permission});
	}
}