var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var Titles = module.exports = General.access('titles');


module.exports.retrieveByName = function(string){

    return db.select('*').from('titles').where('title', 'like', '%'+string+'%')
      .then(function(row){
        return row;
      })
    }