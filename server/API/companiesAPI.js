var Companies  = require('../models/companies');




exports.mount = function (app) {

	//endpoint which retrieves all within companies table
	app.get('/API/companies', function(req, res){
		Companies.retrieveAll(function(x){res.send({Companies: x});
    });
  });

	//endpoint which posts a new company
	app.post('/API/companies', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Companies.updateOrCreate(req.body);
		res.send(req.body);
	});

	//endpoint which retreives a specific company
	app.get('/API/companies/:id', function(req, res){
		Companies.retrieveOne(function(x){res.send({Companies: x, Params: req.params})}, req.params.id
    );
  });
};

