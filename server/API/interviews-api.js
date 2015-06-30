var Interviews = require('../models/Interview');
var express = require('express')


var router = module.exports = express.Router();

//endpoint which retrieves all interviews
	router.get('/', function(req, res){
			Interviews.retrieveAll().then(function(interviews){ res.send({Interviews: interviews})
		});
  });

//endpoint which adds an interviews
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		Interviews.updateOrCreate(req.body);
		res.send(req.body);
	});
