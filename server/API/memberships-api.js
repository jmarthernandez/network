var Membership = require('../models/membership');
var express = require('express')

var router = module.exports = express.Router();

	//endpoint which retreives all memberships
	router.get('/', function(req, res){
		Membership.retrieveAll(function(x){res.send({Membership: x});
    });
  });

	//endpoint which adds a membership
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Membership.updateOrCreate(req.body);
		res.send(req.body);
	});

