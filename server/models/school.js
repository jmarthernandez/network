var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var School = module.exports = {


  //finds a single school and returns its row
  find: function (uid) {
    return db('schools').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0];
      });
  },

  //creates a new school in the DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('schools').insert(attrs).return(attrs);
  },

  //updates an existing school in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('schools').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },

  //retrieves all schools
  retrieveAll: function (callback) {
    return db('schools').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'schools WIll Be here!!!!'}) : callback(rows);
    });
  },
  
  //updates or creates a specific school depending on prior status
  updateOrCreate: function (attrs) {
    return School.update(attrs).catch(School.create.papp(attrs));
  }
}
