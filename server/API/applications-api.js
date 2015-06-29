var Applications = require('../models/applications');
var express = require('express')


var router = module.exports = express.Router();



  //endpoint which retrieves all applications
  router.get('/', function(req, res){
    Applications.retrieveAll(function(x){res.send({Applications: x});
    });
  })

  //endpoint which posts a new application
  router.post('/', function(req, res){
    if (!req.body) return res.sendStatus(400);
    var newValues = Applications.updateOrCreate(req.body);
    res.send(req.body);
  });

  //endpoint which retreives all applications of a specific user
  router.get('/:id', function(req, res){
    if (!req.body) return res.sendStatus(400);
      if (req.params.id === 'allUser' || req.params.id === 'alluser'){
        Applications.retrieveUserWithCompany(req.user, function(x){res.send({Applications: x});
        });
      } else if(req.params.id === 'all'){
        Applications.retrieveAllWithCompany(function(x){res.send({Applications: x});
      })} else {
        Applications.retrieveOne(function(x){res.send({Applications: x, Params: req.params.id});}, req.params.id);
    }
  });
