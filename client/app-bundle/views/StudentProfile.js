var m               = require('mithril');

//Components
var StudentInfo     = require('../components/StudentInfo.js');
var StudentJob      = require('../components/StudentJob.js');
var OnsiteInterview = require('../components/forms/OnsiteInterview.js');
var Messaging       = require('../components/Messaging.js');
var NewApp          = require('../components/forms/NewApp.js');
var FollowUp        = require('../components/forms/FollowUp.js')

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
    m('.row'),
    m('.row', [
      m.component(StudentInfo, { studentInfo: appsData.studentInfo } ),
      m.component(StudentJob, { apps: appsData.apps, studentInfo: appsData.studentInfo } ),
    ]),
    m.component(OnsiteInterview),
    m.component(NewApp),
    m.component(Messaging, { messages: messagesData.messages, users: messagesData.users, studentInfo: appsData.studentInfo } )
  ]) 
}