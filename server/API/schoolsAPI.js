var School     = require('../models/school')



exports.mount = function (app) {

	//endpoint which retreives all schools
	app.get('/API/School', function(req, res){
		School.retrieveAll(function(x){res.send({School: x});
    });
  });

	//endpoint which posts a new school
	app.post('/API/School', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = School.updateOrCreate(req.body);
		res.send(req.body);
	});
};

