var db = require('../db.js');
var Promise = require('bluebird');
var General = require('../lib/general.js');
var Interviews = module.exports = General.access('interviews');



module.exports.megaJoin = function(){
	return db.select('users.name','users.uid','applications.active','applications.phase').from('interviews')
	.rightJoin('applications', function() {
        this.on('applications.id', '=', 'interviews.app_id')})
      .join('users',function() {
        this.on('users.uid', '=', 'applications.user_id')})
}

module.exports.allForApp = function(appId){
  return db.select('interviews.*','companies.name AS company_name').from('interviews')
    .where('interviews.app_id','=', appId)
    .join('applications',function(){
      this.on('interviews.app_id','=','applications.id')})
    .join('companies', function(){
      this.on('companies.id', '=' , 'applications.company_id')}) 
}