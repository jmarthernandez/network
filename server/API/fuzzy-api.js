var Companies  = require('../models/Company');
var Contacts  = require('../models/Contact');
var Questions  = require('../models/Question');
var Users  = require('../models/User');
var Titles  = require('../models/Title');


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

router.get('/companies/', function(req, res){
  Companies.retrieveAll(req.params.id)
  .then(function(x){ res.send({Companies: x})});
});

//endpoint which retreives a specific company
router.get('/companies/:id', function(req, res){
  Companies.retrieveByName(req.params.id)
  .then(function(x){ res.send({Companies: x})});
});

//endpoint which retreives a specific contact
router.get('/contacts/:id', function(req, res){
  Contact.retrieveByName(req.params.id).then(function(x){ res.send({Contacts: x})});
});

//endpoint which retreives a specific company
router.get('/questions/:id', function(req, res){
  Questions.retrieveByName(req.params.id).then(function(x){ res.send({Questions: x})});
});

//endpoint which retreives a specific company
router.get('/users/:id', function(req, res){
  Users.retrieveByName(req.params.id).then(function(x){ res.send({Users: x})});
});

//endpoint which retreives a specific company
router.get('/titles/:id', function(req, res){
  Titles.retrieveByName(req.params.id).then(function(x){ res.send({Titles: x})});
});
