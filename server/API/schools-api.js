var School     = require('../models/school')
var express = require('express')

var router = module.exports = express.Router();

	//endpoint which retreives all schools
	router.get('/', function(req, res){
		School.retrieveAll(function(x){res.send({School: x});
    });
  });

	//endpoint which posts a new school
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = School.updateOrCreate(req.body);
		res.send(req.body);
	});

