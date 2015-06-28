var m               = require('mithril');
var NewApp          = require('../components/forms/NewApp.js');
var Messaging       = require('../components/Messaging.js');
var OnsiteInterview = require('../components/forms/OnsiteInterview.js');
var Phases          = require('../components/Phases.js');
var PhoneScreen     = require('../components/forms/PhoneScreen.js');
var StudentInfo     = require('../components/StudentInfo.js');
var StudentJobs     = require('../components/StudentJobs.js');

//Models
var StudentApps     = require('../models/StudentApps.model.js');
var Messages        = require('../models/Messages.js');

exports.controller = function (ctrl) {
  StudentApps.fetchApps(ctrl);
  StudentApps.fetchInfo(ctrl);
  Messages.fetch(ctrl);
}

exports.view = function (ctrl) {
  var modelData    = StudentApps.all();
  var messagesData = Messages.all();
  console.log(messagesData, 'IN THE TOP')
  return m('.container', [
    m('.row'),
    m('.row', [
      m.component(StudentInfo, { studentInfo: modelData['studentInfo'] } ),
      m.component(StudentJobs, { apps: modelData['apps'], studentInfo: modelData['studentInfo'] } ),
    ]),
    m.component(OnsiteInterview),
    m.component(NewApp),
    m.component(Messaging, { messages: messagesData } )
  ]) 
}