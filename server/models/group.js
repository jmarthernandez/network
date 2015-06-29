var db = require('../db.js')
var Promise = require('bluebird')

var Group = module.exports = {

  //finds a single group and returns its row
  find: function (uid) {
    return db('groups').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      });
  },

  //creates a new group in DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('groups').insert(attrs).return(attrs);
  },

  //updates a specific group in DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('groups').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },

  //retrieves all groups in the DB
  retrieveAll: function (callback) {
    return db('groups').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Groups WIll Be here!!!!'}) : callback(rows)
    });
  },

  //updates or creates a specific group depending on prior status
  updateOrCreate: function (attrs) {
    return Group.update(attrs).catch(Group.create.papp(attrs));
  }
}
