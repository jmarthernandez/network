var db = require('../db.js')
var Promise = require('bluebird')


var General = module.exports = {

  access: function(nodeName, extras){
    var nodeLowerCase = nodeName.toLowerCase();

    return {
      //finds a single group and returns its row
      find: function (uid) {
        return db(nodeLowerCase).select('*').where({ uid: uid }).limit(1)
          .then(function(rows) {
            return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
          });
      },

      //creates a new group in DB
      create: function (attrs) {
        attrs.created_at = new Date();
        return db(nodeLowerCase).insert(attrs).return(attrs);
      },

      //updates a specific group in DB
      update: function (attrs) {
        attrs.updated_at = new Date()
        return db(nodeLowerCase).update(attrs).where({ uid: attrs.uid })
          .then(function(affectedCount) {
            return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
          });
      },

      //retrieves allnodeLowerCasein the DB
      retrieveAll: function () {
        return db(nodeLowerCase).select('*')
        .then(function(rows){
         return rows;
        });
      },

      retrieveOne: function(id){
       return db(nodeLowerCase).select('*').where( {id: id})
         .then(function(row){
       return row;
       });
      },
      
      retrieveByName: function(string, id){
        if (string.length < 4){
          return db.select('*').from(nodeLowerCase).where('name', 'ILIKE', '%'+string+'%').limit('3')
        } else {
          return db.select('*').from(nodeLowerCase).whereRaw('? % name', string).limit('3')
        } 
      },

      //updates or creates a specific group depending on prior status
      updateOrCreate: function (attrs) {
        return General.access(nodeLowerCase).update(attrs).catch(General.access(nodeLowerCase).create.papp(attrs));
      },

      //destroys a contact in the DB
      destroy: function (uid) {
       return db(nodeLowerCase).where({ uid: uid }).delete();
      }
    };
  }
};
