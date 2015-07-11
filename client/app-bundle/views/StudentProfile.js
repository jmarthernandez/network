var m               = require('mithril');

//Components
var StudentInfo     = require('../components/StudentInfo.js');
var StudentJob      = require('../components/StudentJob.js');
var Messaging       = require('../components/Messaging.js');
var NewApp          = require('../components/forms/NewApp.js');
var Graph           = require('../components/OutcomesGraph.js');

//Models
var StudentApp     = require('../models/StudentApp.js');
var Message        = require('../models/Message.js');

exports.controller = function (ctrl) {
  //Fetches student apps, info, and messages from db
  StudentApp.fetchApps(ctrl);
  StudentApp.fetchInfo(ctrl);
  Message.fetch(ctrl);
  Message.fetchUsers();
}

exports.view = function (ctrl) {
  // .all() Makes data accessible to the components 
  var appsData     = StudentApp.all();
  var messagesData = Message.all();
  return m('.container', [
    m('h1.center-align', 'Pending Applications'),

    m('.row'),
    m('.row', [
      // m.component(StudentInfo, { studentInfo: appsData.studentInfo } ),
      m.component(StudentJob, { apps: appsData.apps, studentInfo: appsData.studentInfo } ),
    ]),
    m('.row.center-align', [
      m('a.btn[href=/newapp]', {config: m.route}, 'New Application')
    ]),
    m.component(Messaging, {
      messages: messagesData.messages,
      users: messagesData.users,
      studentInfo: appsData.studentInfo
    })
  ]);
};