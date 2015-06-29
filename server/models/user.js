var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/general.js');
var User = module.exports = General.access('users');