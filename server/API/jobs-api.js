var Jobs       = require('../models/jobs');


exports.mount = function (app) {

	//endpoint which retreives all jobs
	app.get('/API/jobs', function(req, res){
		Jobs.retrieveAll(function(x){res.send({Jobs: x});
    });
  });

//endpoint which adds a job
	app.post('/API/jobs', function(req, res){
		if (!req.body) return res.sendStatus(400);
			var newValues = Jobs.updateOrCreate(req.body);
		res.send(req.body)
	});
};

