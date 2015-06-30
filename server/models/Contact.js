var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var Contacts = module.exports = General.access('contacts');
