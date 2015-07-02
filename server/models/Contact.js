var db = require('../db.js')
var Promise = require('bluebird')
var General = require('../lib/General.js');
var Contacts = module.exports = General.access('contacts');


module.exports.retrieveByName = function(string){
        if (string.length < 4){
          return db.select('contacts.*','companies.name AS company_name').from('contacts').where('contacts.name', 'ILIKE', '%'+string+'%').join('companies', function() {
        this.on('companies.id', '=', 'contacts.company_id')})
        } else {
          return db.select('contacts.*','companies.name AS company_name').from('contacts').whereRaw('? % contacts.name', string).join('companies', function() {
        this.on('companies.id', '=', 'contacts.company_id')})
        } 
      }