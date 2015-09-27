var db           = require('../db.js')
var Promise      = require('bluebird')
var General      = require('../lib/general.js');
var Questions    = module.exports = General.access('questions')