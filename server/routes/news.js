var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {

	/*models.News.create({
    
        "title": "asd",
        "username": "asdf",
        "description": "some desc",
        Tags:[
        {
          "name": "tag1",
          "type": "NEWS" 
        },
        {
          "name": "tag2",
          "type": "NEWS" 
        },
        {
          "name": "tag3",
          "type": "NEWS" 
        }
      ]  
      
  },{
    include: [ models.Tag ]
  }).then(function(item){
      console.log(item);
    }).catch(function(err){
      console.log(err);
    });*/

  

  models.News.findAll({
  		include: [{
  			model: models.Tag,
        as: "Tags"
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