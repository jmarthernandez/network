var db          = require('../db.js')
var Promise     = require('bluebird')
var General     = require('../lib/general.js');
var Contacts    = module.exports = General.access('contacts');

module.exports.retrieveByName = function(string){
        if (string.length < 4){
          return db.select('contacts.name','contacts.phone_number','companies.name AS company_name').from('contacts').where('contacts.name', 'ILIKE', '%'+string+'%').limit('3').join('companies', function() {
        this.on('companies.id', '=', 'contacts.company_id')})
        } else {
          return db.select('contacts.*','companies.name AS company_name').from('contacts').whereRaw('? % contacts.name', string).limit('3').join('companies', function() {
        this.on('companies.id', '=', 'contacts.company_id')})
        } 
}