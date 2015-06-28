var Contacts   = require('../models/contacts');


exports.mount = function (app) {

//endpoint which retrieves all contacts
	app.get('/API/contacts', function(req, res){
		Contacts.retrieveAll(function(x){res.send({Contacts: x})
    });
  });

//endpoint which posts a new contact
	app.post('/API/contacts', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Contacts.updateOrCreate(req.body);
		res.send(req.body);
	});

//endpoint which retrieves a specific contact
	app.get('/API/contacts/:id', function(req, res){
		Contacts.retrieveOne(function(x){res.send({Contacts: x, Params: req.params})}, req.params.id);
  });
};


