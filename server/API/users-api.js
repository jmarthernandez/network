var User = require('../models/user')
var express = require('express')

var router = express.Router();

  //endpoint which retrieves all users
	router.get('/', function(req, res){
		User.retrieve(function(x){res.send({User: x});
    });
  });

  //endpoint which adds a new user
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		User.updateOrCreate(req.body);
		res.send(req.body);
	});

  //endpoint which retrieves a specific user
	router.get('/:id', function(req, res){
    if (!req.body) return res.sendStatus(400);
    User.retrieveOne(function(x){res.send({Users: x, Params: req.params.id})},req.params.id);
  });

	//endpoint which retrieves joined information about the currently logged-in user.
	router.get('/me', function(req, res){
    if (!req.body) return res.sendStatus(400);
    User.retrieveWithRole(function(x){res.send({user: x})},req.user.uid);
	});

module.exports = router;
