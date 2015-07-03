var db = require('../db.js');
var Promise = require('bluebird');
var General = require('../lib/General.js');
var Applications = module.exports = General.access('applications');

  //retrieves a specific application table with company specific info and title specific info
  module.exports.retrieveUserWithCompany = function (user) {

    return db.select('*','companies.name AS company_name','applications.id AS app_id').from('applications').where({'applications.user_id': user.uid})
      .join('companies', function() {
        this.on('companies.id', '=', 'applications.company_id')})
      .join('titles', function(){ 
        this.on('titles.id', '=', 'applications.title_id')})
      .then(function(rows){
       return rows;
      });
  };

  //retrieves all applications along with the associated user and title rows
  module.exports.retrieveAllWithCompany = function () {

    return db.select('*','companies.name AS company_name','applications.id AS app_id').from('applications')
      .join('companies', function() {
        this.on('companies.id', '=', 'applications.company_id')})
      .join('titles',function() {
        this.on('titles.id', '=', 'applications.title_id')})
      .join('users', function() {
        this.on('users.uid', '=', 'applications.user_id')})
      .then(function(rows){
       return rows;
      });
  };

  //retrieves a single application table with company specific info and title specific info
  module.exports.retrieveOne = function(id){

    return db.select('*','companies.name AS company_name','applications.id AS app_id').from('applications').where({'applications.user_id': id})
      .join('companies', function() {
        this.on('companies.id', '=', 'applications.company_id')})
      .join('titles', function(){ 
        this.on('titles.id', '=', 'applications.title_id')})
      .join('users', function() {
        this.on('users.uid', '=', 'applications.user_id')})
      .then(function(rows){
        return rows;
    })
  };
