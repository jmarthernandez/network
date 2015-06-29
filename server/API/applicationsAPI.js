var Applications = require('../models/applications');


exports.mount = function (app) {

  //endpoint which retrieves all applications
  app.get('/API/applications', function(req, res){
    Applications.retrieveAll(function(x){res.send({Applications: x});
    });
  });

  //endpoint which posts a new application
  app.post('/API/applications', function(req, res){
    if (!req.body) return res.sendStatus(400);
    var newValues = Applications.updateOrCreate(req.body);
    res.send(req.body);
  });

  //endpoint which retreives all applications including joined data of the signed-in user
  app.get('/API/appswithcompanies', function(req,res){
    if (!req.body) return res.sendStatus(400);
      Applications.retrieveUserWithCompany(req.user, function(x){res.send({Applications: x});
    });
  });

  //endpoint which retreives all applications of a specific user
  app.get('/API/applications/:id', function(req, res){
    if (!req.body) return res.sendStatus(400);
      Applications.retrieveOne(function(x){res.send({Applications: x, Params: req.params.id});}, req.params.id);
  });

  //endpoint which retreives all applications with 
  app.get('/API/allApps', function(req,res){
    if (!req.body) return res.sendStatus(400);
      Applications.retrieveAllWithCompany(function(x){res.send({Applications: x});
    });
  });
};
