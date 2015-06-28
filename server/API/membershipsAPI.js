var Membership = require('../models/membership');



exports.mount = function (app) {

	//endpoint which retreives all memberships
	app.get('/API/membership', function(req, res){
		Membership.retrieveAll(function(x){res.send({Membership: x});
    });
  });

	//endpoint which adds a membership
	app.post('/API/membership', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = Membership.updateOrCreate(req.body);
		res.send(req.body);
	});
};

