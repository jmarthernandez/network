var Applications = require('../models/Application');
var express = require('express')


var router = module.exports = express.Router();



//endpoint which retrieves all applications
router.get('/', function(req, res){
    Applications.retrieveAll().then(function(apps){ res.send({Application: apps})
  });
});

//endpoint which posts a new application
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Applications.updateOrCreate(req.body);
  res.send(req.body);
});

//endpoint which retreives all applications of a specific user
router.get('/:id', function(req, res){
  if (!req.body) return res.sendStatus(400);
    if (req.params.id === 'allUser' || req.params.id === 'alluser'){
      Applications.retrieveUserWithCompany(req.user).then(function(apps){ res.send({Application: apps})});
    } else if(req.params.id === 'all'){
      Applications.retrieveAllWithCompany().then(function(apps){ res.send({Application: apps})});
    } else {
      Applications.retrieveOne(req.params.id).then(function(apps){ res.send({Application: apps})});
  }
})
