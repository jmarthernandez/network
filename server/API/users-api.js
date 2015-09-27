var User                = require('../models/User')
var Applications        = require('../models/Application')
var express             = require('express')
var Messages            = require('../models/Message')

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

//Endpoint which retrieves all applications of a single user
router.get('/applications', function(req, res){
    Applications.retrieveUserWithCompany(req.user).then(function(apps){ 
      Applications.addCount(apps, function(x){res.send({Application: x})
    })
  });
})

  //Endpoint which retrieves a message between a specific user and a specific sender
router.get('/messages', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Messages.retrieveOne(req.user.uid).then(function(messages){res.send({Messages: messages})});
});

//Endpoint which retrieves a specific user
router.get('/:id', function(req, res){
  if (!req.body) return res.sendStatus(400);
  User.retrieveOne(req.params.id).then(function(users){ res.send({Users: users})});;
});

