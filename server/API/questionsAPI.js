var Questions  = require('../models/questions');


exports.mount = function (app) {

	//endpoint which returns all questions
	app.get('/API/Questions', function(req, res){
		Questions.retrieveAll(function(x){res.send({Questions: x});
    });
  });

	//endpoint which posts a new questions
	app.post('/API/Questions', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Questions.updateOrCreate(req.body);
		res.send(req.body);
	});
};

