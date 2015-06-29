var School     = require('../models/school')
var express = require('express')

var router = module.exports = express.Router();

	//endpoint which retreives all schools
	router.get('/', function(req, res){
			School.retrieveAll().then(function(schools){ res.send({Schools: schools})
		});
  });

	//endpoint which posts a new school
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		School.updateOrCreate(req.body);
		res.send(req.body);
	});

