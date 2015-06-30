var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var User = module.exports = General.access('users')

  //retreives all applications associated with a specific user
  module.exports.retrieveWithRole = function(id){
    
    return db('users').select('*').where({ 'users.uid': id })
    .join('memberships', function() {
      this.on('memberships.user_uid', '=', 'users.uid')})
    .then(function(row){
     return row;
    });
  }

    //retrieves all users
  module.exports.retrieve = function () {
    return db('users').select('*')
      .then(function(rows){
    return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows;
    });
  };

  module.exports.retrieveOne = function(id){
    return db('users').select('*').where( {uid: id})
    .then(function(row){
      return row
    });
  };
