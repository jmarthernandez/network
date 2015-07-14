var Jobs      = require('../models/Job');
var express 	= require('express')

var router = module.exports = express.Router();

//Endpoint which retreives all jobs
router.get('/', function(req, res){
		Jobs.retrieveAll().then(function(jobs){ res.send({Jobs: jobs})
	});
});

//Endpoint which adds a job
router.post('/', function(req, res){
	if (!req.body) return res.sendStatus(400);
	var newValues = Jobs.updateOrCreate(req.body);
	res.send(req.body)
});

