var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var User = module.exports = {

  find: function (uid) {
    return db('users').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      })
  },

  create: function (attrs) {
    console.log('creating user')
    attrs.created_at = new Date()
    return db('users').insert(attrs).return(attrs)
  },

  retrieve: function (callback) {
    return db('users').select('*')
    .then(function(rows){
     return (rows.length === 0) ? Promise.reject(new Error('not_found')) : callback(rows)
    })
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('users').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  retrieveOne: function(callback, id){
    return db('users').select('*').where( {uid: id})
    .then(function(row){
     return callback(row);
    })
  },


  retrieveWithRole: function(callback, id){
    return db('users').select('*').join('memberships', function() {
    this.on('memberships.user_uid', '=', 'users.uid')})
    .then(function(row){
       var filteredRow = row.filter(function(obj){
        return id === obj.user_uid;
        })
     return callback(filteredRow);
    })
  },

  updateOrCreate: function (attrs) {
    return User.update(attrs).catch(User.create.papp(attrs))
  }
}
