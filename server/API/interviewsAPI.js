var Interviews = require('../models/interviews');


exports.mount = function (app) {

//endpoint which retrieves all interviews
	app.get('/API/interviews', function(req, res){
		Interviews.retrieveAll(function(x){res.send({Interviews: x});
    });
  });

//endpoint which adds an interviews
	app.post('/API/interviews', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Interviews.updateOrCreate(req.body);
		res.send(req.body);
	});
};

