const debug = require('debug')('app');
const models = require('../models/index');
const config = require('../config/config.json');
const jwtUtil = require('../utils/jwt');

//
//  After signin in passport, send user data
//
exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  debug(req.user);
  res.send({ 
    token: jwtUtil.tokenForUser(req.user),
    user: {
      id: req.user.id,
      email: req.user.email,
      role: req.user.Role.type
    }
  });
}

//
//  Signup user
//
exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }
  
  // See if a user with the given email exists
  models.User.findOne({ where: { email: email }})
  .then(function(existingUser) {

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    models.User.create({
      email: email,
      password: password,
      role_id: 2
    }).then(function(user){

      // Repond to request indicating the user was created
      res.json({ token: jwtUtil.tokenForUser(user) });
    }).catch(function(err){
      return next(err);
    });

  })
  .catch(function(err){
    return next(err);
  });
}