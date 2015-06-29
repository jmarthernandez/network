var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var contacts = module.exports = {

  //creates a new contact in the DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('contacts').insert(attrs).return(attrs);
  },
  
  //updates a contact's information in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('contacts').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },
  
  //updates or creates a specific contact depending on prior status
  updateOrCreate: function (attrs) {
    return contacts.update(attrs).catch(contacts.create.papp(attrs));
  },
  
  //retrieves all the contacts in the DB
  retrieveAll: function (callback) {
    return db('contacts').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'contacts WIll Be here!!!!'}) : callback(rows);
    });
  },

  //retrieves a single contact with the given ID
  retrieveOne: function(callback, id){
    return db('contacts').select('*').where( {id: id})
    .then(function(row){
     return callback(row);
    });
  },
  
  //destroys a contact in the DB
  destroy: function (uid) {
    return db('contacts').where({ uid: uid }).delete();
  }

}

