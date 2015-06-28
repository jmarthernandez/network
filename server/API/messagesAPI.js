var User       = require('../models/user')
var Groups     = require('../models/group')
var Membership = require('../models/membership')
var School     = require('../models/school')
var Jobs       = require('../models/jobs')
var Companies  = require('../models/companies')
var Messages   = require('../models/messages')
var Utils      = require('./utils')


exports.mount = function (app) {

	app.get('/API/messages', function(req, res){
		Messages.retrieveAll(function(x){res.send({Messages: x})
    })
  });

	app.get('/API/messagesToo/', function(req, res){
    	if (!req.body) return res.sendStatus(400)
    	Messages.retrieveOne(function(x){res.send({Messages: x, Params: req.params.id})})
	});
	
	app.post('/API/messages', function(req, res){
		console.log(req.body)
		if (!req.body) return res.sendStatus(400)
		Messages.updateOrCreate(req.body)
		res.send(req.body)
	});
}

