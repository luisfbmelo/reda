const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');

exports.profile = function(req, res, next){
	console.log();
	console.log(req.headers.authorization);
	jwtUtil.userExists(req.headers.authorization)
	.then(function(user){
		if (user){
			return res.json({result: user});
		}
		 //return res.status(401).send({ error: 'Unauthorized'});
	});
}