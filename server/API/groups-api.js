var Groups     = require('../models/group');
var express = require('express')


var router = module.exports = express.Router();

//endpoint which retrieves all groups
	router.get('/', function(req, res){
		Groups.retrieveAll(function(x){res.send({Groups: x});
    });
  });

//endpoint which posts a new group
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Groups.updateOrCreate(req.body);
		res.send(req.body);
	});

