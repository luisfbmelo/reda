const Authentication = require('../controllers/authenticationController');
const UserController = require('../controllers/userController');
const passportService = require('../services/passport');
const passport = require('passport');

var express = require('express');
var router = express.Router();
var models = require('../models/index');

// Check if token is valid
const requireAuth = function(req, res, next) {
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

const requireSignin = passport.authenticate('local', { session: false });

/* GET users listing. */
router.get('/', requireAuth, function(req, res, next) {
  res.send({ message: 'Super secret code is ABC123' });
});

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);
router.get('/profile', requireAuth, UserController.profile);

module.exports = router;