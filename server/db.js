var fs = require('fs')
var path = require('path')

var config = require('../knexfile.js');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);
var Promise = require('bluebird');

module.exports = knex;

knex.migrate.latest([config]); 

//efficiently deallocates and deleted the users and group tables  
knex.deleteEverything = function () {
  return knex('memberships').truncate().then(function() {
    return Promise.all([
      knex('users').delete(),
      knex('groups').delete()
    ])
  })
}
