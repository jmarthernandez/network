var db = require('../db.js')
var Promise = require('bluebird')

var Interviews = module.exports = {

  //creates a new interview in the DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('interviews').insert(attrs).return(attrs);
  },
  
  //updates an interview in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('interviews').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },
  
  //updates or creates a specific interview depending on prior status
  updateOrCreate: function (attrs) {
    return Interviews.update(attrs).catch(Interviews.create.papp(attrs));
  },
  
  //retrieves all interviews in the DB
  retrieveAll: function (callback) {
    return db('interviews').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Interviews WIll Be here!!!!'}) : callback(rows);
    });
  },
  
  //destroys an interview in the DB
  destroy: function (uid) {
    return db('interviews').where({ uid: uid }).delete()
  }
};
