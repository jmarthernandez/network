var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var Titles = module.exports = General.access('titles');


module.exports.retrieveByName = function(string){

    if (string.length < 4){
          return db.select('*').from('titles').where('title', 'ILIKE', '%'+string+'%')
        } else {
          return db.select('*').from('titles').whereRaw('? % title', string)
        }
    }