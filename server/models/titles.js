var db = require('../db.js')
var Promise = require('bluebird')

var Titles = module.exports = {

	find: function (uid) {
    return db('titles').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0];
      });
  },
  
  //creates a new title in the DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('titles').insert(attrs).return(attrs);
  },

  //retrieves all titles
  retrieveAll: function (callback) {
    return db('titles').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'titles WIll Be here!!!!'}) : callback(rows);
    });
  },

  //updates a specific title
  update: function (attrs) {
    attrs.updated_at = new Date()
    console.log(attrs.uid)
    return db('titles').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },

  //updates or creates a specific title depending on prior status
  updateOrCreate: function (attrs) {
    return Titles.update(attrs).catch(Titles.create.papp(attrs));
  }
};