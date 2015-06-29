var m               = require('mithril');

//Components
var StudentInfo     = require('../components/StudentInfo.js');
var StudentJobs     = require('../components/StudentJobs.js');
var OnsiteInterview = require('../components/forms/OnsiteInterview.js');
var Messaging       = require('../components/Messaging.js');
var NewApp          = require('../components/forms/NewApp.js');

//Models
var StudentApps     = require('../models/StudentApps.js');
var Messages        = require('../models/Messages.js');

exports.controller = function (ctrl) {
  //Fetches student apps, info, and messages from db
  StudentApps.fetchApps(ctrl);
  StudentApps.fetchInfo(ctrl);
  Messages.fetch(ctrl);
}

exports.view = function (ctrl) {
  // .all() Makes data accessable to the components 
  var appsData     = StudentApps.all();
  var messagesData = Messages.all();
  return m('.container', [
    m('.row'),
    m('.row', [
      m.component(StudentInfo, { studentInfo: appsData.studentInfo } ),
      m.component(StudentJobs, { apps: appsData.apps, studentInfo: appsData.studentInfo } ),
    ]),
    m.component(OnsiteInterview),
    m.component(NewApp),
    m.component(Messaging, { messages: messagesData } )
  ]) 
}