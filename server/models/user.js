var db = require('../db.js')
var Promise = require('bluebird')

var User = module.exports = {



  //finds a single user and returns its row
  find: function (uid) {
    return db('users').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0];
      });
  },
  
  //creates a new user in the db
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('users').insert(attrs).return(attrs);
  },

  //retrieves all users
  retrieve: function (callback) {
    return db('users').select('*')
    .then(function(rows){
     return (rows.length === 0) ? Promise.reject(new Error('not_found')) : callback(rows);
    });
  },

  //updates an existing school in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('users').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },

  //retrieves a single application associated with a userID
  retrieveOne: function(id,callback){
    return db('users').select('*').where( {uid: id})
    .then(function(row){
     return callback(row);
    });
  },

  //retreives all applications associated with a specific user
  retrieveWithRole: function(callback, id){
    
    return db('users').select('*').where({ 'users.uid': id })
    .join('memberships', function() {
      this.on('memberships.user_uid', '=', 'users.uid')})
    .then(function(row){
     return callback(row);
    });
  },
  
  //updates or creates a specific user depending on prior status
  updateOrCreate: function (attrs) {
    return User.update(attrs).catch(User.create.papp(attrs));
  }
};
