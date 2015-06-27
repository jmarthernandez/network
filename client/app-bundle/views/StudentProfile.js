var m               = require('mithril');
var NewApp          = require('../components/forms/NewApp.js');
var Messaging       = require('../components/Messaging.js');
var OnsiteInterview = require('../components/forms/OnsiteInterview.js');
var Phases          = require('../components/Phases.js');
var PhoneScreen     = require('../components/forms/PhoneScreen.js');
var StudentInfo     = require('../components/StudentInfo.js');
var StudentJobs     = require('../components/StudentJobs.js')

//Models
var StudentApps = require('../models/StudentApps.model.js')

exports.controller = function () {
  StudentApps.fetchApps();
  StudentApps.fetchInfo();
}

exports.view = function (ctrl) {
  var modelData = StudentApps.all()
  return m('.container', [
    m('.row'),
    m('.row', [
      m.component(StudentInfo, { studentInfo: modelData['studentInfo'] } ),
      m.component(StudentJobs, { apps: modelData['apps'], studentInfo: modelData['studentInfo'] } ),
    ]),
    m.component(NewApp)
  ]) 
}