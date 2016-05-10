const jwt = require('jwt-simple');
const models = require('../models/index');
const config = require('../config/config.json');

exports.userExists = function(token){
	var promise = new Promise(function(resolve, reject){
		if (token){
			var payload = jwt.decode(token, config.secret);

			// Check if expired
			if (payload.exp < new Date().getTime()){
				resolve(false);
			}

			return models.User.findById(payload.sub).then(function(user) {
			    if (user) {
			      resolve(user);
			    } else {
			      resolve(false);
			    }
			  }).catch(function(err){
			    reject(err);
			  });	
		}else{
			resolve(false);
		}
	});

	return promise;		
}

exports.tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  const tomorrow = new Date(timestamp + (24 * 60 * 60 * 1000));
  return jwt.encode({ sub: user.id, iat: timestamp, expires: tomorrow }, config.secret);
}