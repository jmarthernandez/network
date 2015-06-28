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

    return db.select('messages.*', 'sender.name AS sender_name', 'sender.uid','sender.status','sender.avatar_url AS sender_url', 'receiver.name AS receiver_name').from('messages')
    .join('users AS sender', 'messages.sender_uid', 'sender.uid')
    .join('users AS receiver', 'messages.receiver_uid', 'receiver.uid')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Messages Will Be here!!!!'}) : callback(rows)
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
