var m = require('mithril');

//Components
var CurrentApps     = require('../components/CurrentApps.js');
var Messaging       = require('../components/Messaging.js');
var Graph           = require('../components/OutcomesGraph.js')  
var StudentProgress = require('../components/StudentProgress.js')

//Models
var App             = require('../models/App.js');
var Message         = require('../models/Message.js');

exports.controller = function() {
  //Grabs apps for all students
  App.fetch();
  Message.fetch();
  Message.fetchUsers();
  Message.fetchMe();
};

exports.view = function(ctrl) {
  var apps = App.all();
  var messagesData = Message.all();
  return m('.container', [
    m('h1.center-align', 'Student Outcomes'),
    m.component(CurrentApps, {apps: apps}),
    m.component(Graph),
    m.component(StudentProgress),
    m.component(Messaging, {
      messages: messagesData.messages,
      users: messagesData.users,
      studentInfo: messagesData.me
    })
  ]);
};