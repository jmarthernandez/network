var fs = require('fs')
var path = require('path')

var config = require('../knexfile.js')
var env = process.env.APP_ENV || 'development'
var knex = require('knex')(config[env])
var Promise = require('knex/node_modules/bluebird')

module.exports = knex
