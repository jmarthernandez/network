var Interviews = require('../models/interviews');
var express = require('express')


var router = module.exports = express.Router();

//endpoint which retrieves all interviews
	router.get('/', function(req, res){
		Interviews.retrieveAll(function(x){res.send({Interviews: x});
    });
  });

//endpoint which adds an interviews
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Interviews.updateOrCreate(req.body);
		res.send(req.body);
	});
