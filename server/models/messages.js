var db = require('../db.js');
var Promise = require('bluebird');
var General = require('../lib/general.js');
var Messages = module.exports = General.access('messages');


  module.exports.retrieveOne = function () {

    return db.select('messages.*', 'sender.name AS sender_name', 'sender.uid','sender.status','sender.avatar_url AS sender_url', 'receiver.name AS receiver_name').from('messages')
    .join('users AS sender', 'messages.sender_uid', 'sender.uid')
    .join('users AS receiver', 'messages.receiver_uid', 'receiver.uid')
    .then(function(rows){
     return rows;
    })
  };