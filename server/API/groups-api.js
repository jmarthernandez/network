var Groups    = require('../models/Group');
var express 	= require('express')

var router = module.exports = express.Router();

//Endpoint which retrieves all groups
router.get('/', function(req, res){
  Groups.retrieveAll().then(function(groups){ res.send({Groups: groups})
  });
});

//Endpoint which posts a new group
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Groups.updateOrCreate(req.body);
  res.send(req.body);
});

