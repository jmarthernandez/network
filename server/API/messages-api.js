var Messages    = require('../models/Message');
var express     = require('express')

var router = module.exports = express.Router();

  //Endpoint which retreives all messages
router.get('/', function(req, res){
  Messages.retrieveAll().then(function(messages){ res.send({Messages: messages})
  });
});

  
  //Endpoint which adds a message
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Messages.updateOrCreate(req.body);
  res.send(req.body);
});
