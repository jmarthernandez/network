var Messages   = require('../models/messages');


exports.mount = function (app) {

	//endpoint which retreives all messages
	app.get('/API/messages', function(req, res){
		Messages.retrieveAll(function(x){res.send({Messages: x});
    });
  });

	//endpoint which retrieves a message between a specific user and a specific sender
	app.get('/API/messagesToo/', function(req, res){
    if (!req.body) return res.sendStatus(400);
    Messages.retrieveOne(function(x){res.send({Messages: x, Params: req.params.id})});
	});
	
	//endpoint which adds a message
	app.post('/API/messages', function(req, res){
		if (req.body) return res.sendStatus(400);
		Messages.updateOrCreate(req.body);
		res.send(req.body);
	});
}

