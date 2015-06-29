var Titles     = require('../models/titles')
var express = require('express')

var router = module.exports = express.Router();


	//endpoint which retrieves all questions
	router.get('/', function(req, res){
		Titles.retrieveAll(function(x){res.send({Titles: x});
    });
  });

	//endpoint which adds a new questions
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Titles.updateOrCreate(req.body);
		res.send(req.body);
	});

