var Membership = require('../models/Membership');
var express = require('express')

var router = module.exports = express.Router();

//endpoint which retreives all memberships
router.get('/', function(req, res){
  Membership.retrieveAll().then(function(memberships){ res.send({Memberships: memberships})
  });
});

//endpoint which adds a membership
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Membership.updateOrCreate(req.body);
  res.send(req.body);
});

