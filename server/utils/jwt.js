const debug = require('debug')('app');
const jwt = require('jwt-simple');
const models = require('../models/index');
const config = require('../config/config.json');
const passport = require('passport');
const passportService = require('../services/passport');

var exports = module.exports;

exports.tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  // Expires in 1 day
  const tomorrow = new Date(timestamp + (24 * 60 * 60 * 1000));
  return jwt.encode({ sub: user.id, iat: timestamp, expires: tomorrow }, config.secret);
}

exports.userExists = function(req, res, token){
	var promise = new Promise(function(resolve, reject){

		if (token){
			var payload = jwt.decode(token, config.secret);

			return models.User.findOne({where: {id:payload.sub}, include:[models.Role]}).then(function(user) {
			    if (user) {
			    	// Check if expired
					if (new Date(payload.expires).getTime() < new Date().getTime()){
						reject();						
						return res.status(401).send({ error: "token_expired",  new_token : exports.tokenForUser(user) })
					}
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

// Check if token is valid
exports.requireAuth = function(req, res, next) {
  passport.authenticate('jwt', { session: false }, function(err, user, info){
    if (err) { return next(err) }
    if (!user && info.new_token) {
      // If no user and a new token is given      
      return res.status(401).send({ error: "token_expired", new_token: info.new_token });
    }else if(!user){
      return res.status(401).send("Unauthorized");
    }
    next();
  })(req, res, next);
};


module.exports = exports;