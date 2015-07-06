var Contacts   = require('../models/Contact');
var express = require('express')

var router = module.exports = express.Router();


//endpoint which retrieves all contacts
router.get('/', function(req, res){
  Contacts.retrieveAll().then(function(contacts){ res.send({Contacts: contacts})
  });
});

//endpoint which posts a new contact
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Contacts.updateOrCreate(req.body);
  res.send(req.body);
});

//endpoint which retrieves a specific contact
router.get('/:id', function(req, res){
  Contacts.retrieveOne(req.params.id).then(function(contacts){res.send({Contacts: contacts})});
});


// router.get('/company/:id', function(req.res){
//   Contacts.retrieveCompanyId(req.params.id).then(function(contacts){res.send({Contacts: contacts})});
// })
