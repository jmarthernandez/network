var db = require('../db.js')
var Promise = require('bluebird')

var Jobs = module.exports = {
  
  //finds a single group and returns its row
	find: function (uid) {
    return db('jobs').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0];
      });
  },
  
  //creates a new job in the DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('jobs').insert(attrs).return(attrs);
  },
  
  //retrieves all jobs in the DB
  retrieveAll: function (callback) {
    return db('jobs').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Jobs WIll Be here!!!!'}) : callback(rows);
    });
  },
  
  //updates a job in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('jobs').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },
  
  //updates or creates a specific job depending on prior status
  updateOrCreate: function (attrs) {
    return Jobs.update(attrs).catch(Jobs.create.papp(attrs));
  }
};