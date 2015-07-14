var Titles     	= require('../models/Title')
var express 		= require('express')

var router = module.exports = express.Router();

//Endpoint which retrieves all questions
router.get('/', function(req, res){
  Titles.retrieveAll().then(function(titles){ res.send({Titles: titles})
  });
});

//Endpoint which adds a new questions
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Titles.updateOrCreate(req.body);
  res.send(req.body);
});

