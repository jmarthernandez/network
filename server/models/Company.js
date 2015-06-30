var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var Companies = module.exports = General.access('companies');
