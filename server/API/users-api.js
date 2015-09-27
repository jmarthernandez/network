var User                = require('../models/User')
var express             = require('express')

var router = module.exports = express.Router();

//Endpoint which retrieves all users
router.get('/', function(req, res){
  User.retrieve().then(function(users){ res.send({Users: users})
  });
});

//Endpoint which adds a new user
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  User.updateOrCreate(req.body);
  res.send(req.body);
});

//Endpoint which retrieves joined information about the currently logged-in user.
router.get('/me', function(req, res){
  if (!req.body) return res.sendStatus(400);
  User.retrieveWithRole(req.user.uid).then(function(users){ res.send({Users: users})});;
});
//Endpoint which retrieves a specific user
router.get('/:id', function(req, res){
  if (!req.body) return res.sendStatus(400);
  User.retrieveOne(req.params.id).then(function(users){ res.send({Users: users})});;
});

