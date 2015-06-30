var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var Questions = module.exports = General.access('questions')