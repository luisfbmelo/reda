const debug = require('debug')('app');
const jwt = require('jwt-simple');
const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');

//
//	If needs user, gives to the controller.
//	If no user, still continues
//
module.exports = function(){
	return function(req, res, next){
		req.userExists = null;

		var token = req.headers.authorization;

		if (token){
			var payload = jwt.decode(token, config.secret);

			models.User.findOne({where: {id:payload.sub}, include:[models.Role]}).then(function(user) {
			    if (user) {
			    	// Check if expired
					if (new Date(payload.expires).getTime() < new Date().getTime()){
						res.status(401).send({ message: "token_expired",  new_token : jwtUtil.tokenForUser(user) })
					}
			      req.userExists = user;
			      next();
			    } else {
			      next();
			    }
			  }).catch(function(err){

			    next(err);
			  });	
		}else{
			next();
		}
	}
}