var Interviews = require('../models/Interview');
var express = require('express')


var router = module.exports = express.Router();

//endpoint which retrieves all interviews
router.get('/', function(req, res){
  Interviews.retrieveAll().then(function(interviews){ res.send({Interviews: interviews})
  });
});

//endpoint which adds an interviews
router.post('/', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Interviews.updateOrCreate(req.body);
  res.send(req.body);
});


router.get('/all', function(req, res){
  if (!req.body) return res.sendStatus(400);
  Interviews.megaJoin().then(function(interviews){ res.send({Interviews: interviews})
  })
});
router.get('/:id', function(req, res){
  console.log(req.params.id)
  Interviews.allForApp(req.params.id).then(function(interviews){
    console.log('interviews', interviews)
    var obj = {1: [], 2: [], 3: [], 4: [], 5: []}
    interviews.forEach(function(interview){
      if(interview.type === 'Phone Screen'){ obj[1].push(interview) }
      else if(interview.type === 'Onsite Interview'){ obj[2].push(interview) }
      else if(interview.type === 'Coding Challenge'){ obj[3].push(interview) }
      else if(interview.type === 'Technical Screen'){ obj[4].push(interview) }
    })
    res.send({Interviews: obj})
  })
});