const Authentication = require('../controllers/authenticationController');
const passportService = require('../services/passport');
const passport = require('passport');

var express = require('express');
var router = express.Router();
var models = require('../models/index');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

/* GET users listing. */
router.get('/', requireAuth, function(req, res, next) {
  res.send({ message: 'Super secret code is ABC123' });

	/*models.User.create({
    "ldap_id": 1
  }).then(function(item){
    models.App.bulkCreate([
      {
        "system": "asd",
        "user_id": item.id,
        "name": "some name",
        "description": "some desc",
        "link": "www.google.com"      
      },
      {
        "system": "asd2",
        "user_id": item.id,
        "name": "some name2",
        "description": "some desc2",
        "link": "www.google.com"      
      },
      {
        "system": "asd3",
        "user_id": item.id,
        "name": "some name3",
        "description": "some desc3",
        "link": "www.google.com"      
      }
  ]).then(function(item){
      console.log(item);
    }).catch(function(err){
      console.log("ERROR");
    });


  }).catch(function(err){
    console.log("ERROR");
  });
*/
  

  /*models.User.findAll({
  		include: [{
  			model: models.App,
  			as: "Apps",
  			include: [{
  				seperate: true,
	  			model: models.User
	  		}]
  		}]
  	
	}).then(function(user, created){
		res.send(user);
	});*/

	/*models.App.findAll({
  		include: [{
  			model: models.User
  		}]
  	
	}).then(function(user, created){
		res.send(user);
	});*/
});

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);

module.exports = router;
