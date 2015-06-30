var Questions  = require('../models/Question');
var express = require('express')

var router = module.exports = express.Router();


//endpoint which returns all questions
router.get('/', function(req, res){
  Questions.retrieveAll().then(function(questions){ res.send({Questions: questions})
  });
});

//endpoint which posts a new questions
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Questions.updateOrCreate(req.body);
  res.send(req.body);
});

