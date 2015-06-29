var Contacts   = require('../models/contacts');
var express = require('express')

var router = module.exports = express.Router();


//endpoint which retrieves all contacts
	router.get('/', function(req, res){
		Contacts.retrieveAll(function(x){res.send({Contacts: x})
    });
  });

//endpoint which posts a new contact
	router.post('/', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Contacts.updateOrCreate(req.body);
		res.send(req.body);
	});

//endpoint which retrieves a specific contact
	router.get('/:id', function(req, res){
		Contacts.retrieveOne(function(x){res.send({Contacts: x, Params: req.params})}, req.params.id);
  });


