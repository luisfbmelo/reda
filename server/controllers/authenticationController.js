const jwt = require('jwt-simple');
const models = require('../models/index');
const config = require('../config/config.json');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  const exp = new Date(timestamp + 7 * 24 * 60 * 60 * 1000);
  return jwt.encode({ sub: user.id, iat: timestamp, exp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }
  
  // See if a user with the given email exists
  models.User.findOne({ where: { email: email }})
  .then(function(existingUser) {
    console.log(existingUser);
    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    models.User.create({
      email: email,
      password: password,
      role_id: 1
    }).then(function(user){

      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    }).catch(function(err){
      return next(err);
    });

  })
  .catch(function(err){
    return next(err);
  });
}