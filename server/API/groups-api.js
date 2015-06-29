var Groups     = require('../models/group');


exports.mount = function (app) {

//endpoint which retrieves all groups
	app.get('/API/Groups', function(req, res){
		Groups.retrieveAll(function(x){res.send({Groups: x});
    });
  });

//endpoint which posts a new group
	app.post('/API/Groups', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Groups.updateOrCreate(req.body);
		res.send(req.body);
	});
};

