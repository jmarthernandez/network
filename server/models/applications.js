var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Applications = module.exports = {

  //finds and returns a specific application
  find: function (uid) {
    return db('applications').select('*').where({ uid: uid }).limit(1)
      .then(function(rows) {
        return (rows.length === 0) ? Promise.reject(new Error('not_found')) : rows[0]
      });
  },

  //creates a new application
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('applications').insert(attrs).return(attrs);
  },

  //retrieves a specific application table with company specific info and title specific info
  retrieveUserWithCompany: function (user, callback) {

  retrieveAllWithCompany: function (callback) {

    return db.select('*').from('applications').join('companies', function() {
      this.on('companies.id', '=', 'applications.company_id')}).join('titles',
        function(){ this.on('titles.id', '=', 'applications.title_id')}).join('users', function() {
          this.on('users.uid', '=', 'applications.user_id')
        })
      .then(function(rows){
       return (rows.length === 0) ? callback({title:'Apps with companies will be here, joined'}) : callback(rows)
    })
  },

  retrieveAll: function (callback) {
    return db('applications').select('*')
    .then(function(rows){
     return (rows.length === 0) ? callback({title:'Applications WIll Be here!!!!'}) : callback(rows);
    });
  },

  //updates a specific application
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('applications').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },
  
  //retrieves a single application table with company specific info and title specific info
  retrieveOne: function(callback, id){
    return db('applications').select('*').where({'applications.user_id': id})
      .join('companies', function() {
        this.on('companies.id', '=', 'applications.company_id')})
      .join('titles', function(){ 
        this.on('titles.id', '=', 'applications.title_id')})
      .join('users', function() {
        this.on('users.uid', '=', 'applications.user_id')})
      .then(function(row){
        return callback(row);
    })
  },

  //updates or creates a specific application depending on prior status
  updateOrCreate: function (attrs) {
    return Applications.update(attrs).catch(Applications.create.papp(attrs));
  }
}