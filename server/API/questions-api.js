var Questions  = require('../models/questions');
var express = require('express')

var router = module.exports = express.Router();


	//endpoint which returns all questions
	router.get('/', function(req, res){
		Questions.retrieveAll(function(x){res.send({Questions: x});
    });
  });

	//endpoint which posts a new questions
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Questions.updateOrCreate(req.body);
		res.send(req.body);
	});

