var express = require('express');
var router = express.Router();
var models = require('../models/index');
const jwtUtil = require('../utils/jwt');
const Authentication = require('../controllers/authenticationController');
const UserController = require('../controllers/userController');
const passportService = require('../services/passport');
const passport = require('passport');

// Passport
const requireSignin = passport.authenticate('local', { session: false });

/* GET users listing. */
router.get('/', jwtUtil.requireAuth, function(req, res, next) {
  res.send({ message: 'Super secret code is ABC123' });
});

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);
router.get('/profile', jwtUtil.requireAuth, UserController.profile);

module.exports = router;