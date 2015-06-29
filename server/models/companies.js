var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Companies = module.exports = {


  //creates a new company in the DB
  create: function (attrs) {
    attrs.created_at = new Date()
    return db('companies').insert(attrs).return(attrs)
  },

  //updates a companies information in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('companies').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },
  //updates or creates a specific company depending on prior status
  updateOrCreate: function (attrs) {
    return Companies.update(attrs).catch(Companies.create.papp(attrs))
  },

  //retrieves a single company with a given ID
  retrieve: function (callback, attrs) {
    return db().select('*').where({id: attrs.id})
    .then(function(rows){
      return (rows.length === 0) ? callback({title:'companies WIll Be here!!!!'}) : callback(rows)
    })
  },

  //retreives all the companies in the DB
  retrieveAll: function (callback) {
    return db('companies').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'companies WIll Be here!!!!'}) : callback(rows)
    })
  },

  //retrieves a single company with the given ID
  retrieveOne: function(callback, id){
    return db('companies').select('*').where( {id: id})
    .then(function(row){
      return callback(row);
    })
  },
  //destroys a company in the DB
  destroy: function (uid) {
    return db('Companies').where({ uid: uid }).delete()
  }

}

