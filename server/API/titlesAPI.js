var Titles     = require('../models/titles')


exports.mount = function (app) {


	//endpoint which retrieves all questions
	app.get('/API/titles', function(req, res){
		Titles.retrieveAll(function(x){res.send({Titles: x});
    });
  });

	//endpoint which adds a new questions
	app.post('/API/titles', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Titles.updateOrCreate(req.body);
		res.send(req.body);
	});
};

