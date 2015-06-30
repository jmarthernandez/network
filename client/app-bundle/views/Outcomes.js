var m = require('mithril');

//Components
var CurrentApps = require('../components/CurrentApps.js');
var Messaging = require('../components/Messaging.js');

//Models
var App = require('../models/App.js');
var Message = require('../models/Message.js');

exports.controller = function() {
  //Grabs apps for all students
  App.fetch();
  Message.fetch();
};

exports.view = function(ctrl) {
  var apps = App.all();
  var messagesData = Message.all();
  return m('.container', [
    m('h1.center-align', 'Student Outcomes'),
    m.component(CurrentApps, {apps: apps}),
    m.component(Messaging, { messages: messagesData } )
  ]);
};