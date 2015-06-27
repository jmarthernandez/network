var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Messages = module.exports = {

  find: function (uid) {
    return db('messages').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      })
  },

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('messages').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('messages').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },


  retrieveOne: function (sender,callback, receiver) {

    return db.select('*').from('messages').leftOuterJoin('users', function() {
    this.on('users.uid', '=', 'receiver_uid').orOn('users.uid', '=', 'sender_uid')})
    .then(function(rows){
      rows[0].sender_name = rows[0].name;
      rows[0].receiver_name = rows[1].name;
      rows.pop();
     return (rows.length === 0) ? callback({title:'Messages WIll Be here!!!!'}) : callback(rows)
    })
  },


  retrieveAll: function (callback) {
    return db('messages').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Messages WIll Be here!!!!'}) : callback(rows)
    })
  },

  updateOrCreate: function (attrs) {
    return Messages.update(attrs).catch(Messages.create.papp(attrs))
  }
}
