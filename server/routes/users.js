var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {

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
  });*/

  

  models.User.findAll({
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
	});

	/*models.App.findAll({
  		include: [{
  			model: models.User
  		}]
  	
	}).then(function(user, created){
		res.send(user);
	});*/
});

module.exports = router;
