var User       = require('../models/user')


exports.mount = function (app) {

  //endpoint which retrieves all users
	app.get('/API/users', function(req, res){
		User.retrieve(function(x){res.send({User: x});
    });
  });

  //endpoint which adds a new user
	app.post('/API/users', function(req, res){
		if (!req.body) return res.sendStatus(400);
		var newValues = User.updateOrCreate(req.body);
		res.send(req.body);
	});

  //endpoint which retrieves a specific user
	app.get('/API/users/:id', function(req, res){
    if (!req.body) return res.sendStatus(400);
    User.retrieveOne(req.params.id, function(x){res.send({Users: x, Params: req.params.id})});
  });

	//endpoint which retrieves joined information about the currently logged-in user.
	app.get('/api/me', function(req, res){
    if (!req.body) return res.sendStatus(400);
    User.retrieveWithRole(function(x){res.send({user: x})},req.user.uid);
	});
};

