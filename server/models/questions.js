var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Questions = module.exports = {

  //retrieves a specific question from the DB
	find: function (uid) {
    return db('questions').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0];
      });
  },

  //creates a question in the db
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('questions').insert(attrs).return(attrs);
  },
  
  //retrieves all questions
  retrieveAll: function (callback) {
    return db('questions').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Questions WIll Be here!!!!'}) : callback(rows);
    });
  },

  //updates a specific question
  update: function (attrs) {
    attrs.updated_at = new Date()
    console.log(attrs.uid)
    return db('questions').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },
  
  //updates or creates a specific question depending on prior status
  updateOrCreate: function (attrs) {
    return Questions.update(attrs).catch(Questions.create.papp(attrs));
  }

};
