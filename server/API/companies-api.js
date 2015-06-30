var Companies  = require('../models/Company');
var express = require('express')


var router = module.exports = express.Router();


	//endpoint which retrieves all within companies table
	router.get('/', function(req, res){
		Companies.retrieveAll().then(function(companies){res.send({Companies: companies});
    });
  });

	//endpoint which posts a new company
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
			Companies.updateOrCreate(req.body);
		res.send(req.body);
	});

	//endpoint which retreives a specific company
	router.get('/:id', function(req, res){
		Companies.retrieveOne(req.params.id).then(function(x){ res.send({Companies: x})});
  });

