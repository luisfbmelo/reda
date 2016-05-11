const jwt = require('jwt-simple');
const models = require('../models/index');
const config = require('../config/config.json');
const passport = require('passport');
const passportService = require('../services/passport');

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

// Check if token is valid
exports.requireAuth = function(req, res, next) {
  passport.authenticate('jwt', { session: false }, function(err, user, info){
    if (err) { return next(err) }
    if (!user && info.token) {
      // If no user and a new token is given      
      return res.status(401).send({ error: "token_expired", new_token: info.token });
    }else if(!user){
      return res.status(401).send({ error: "Unauthorized"});
    }
    next();
  })(req, res, next);
};
