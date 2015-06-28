var m             	= require('mithril');
var Navbar        	= require('../../components/navbar/navbar.js');
var NewApp        	= require('../../components/forms/newApp/newApp.js');
var Messaging     	= require('../../components/messaging/messaging.js');
var OnsiteInterview = require('../../components/forms/onsiteInterview/onsiteInterview.js');
var Phases        	= require('../../components/phases/phases.js');
var PhoneScreen     = require('../../components/forms/phoneScreen/phoneScreen.js');
var StudentInfo   	= require('../../components/studentInfo/studentInfo.js');
var StudentJobs     = require('../../components/studentJobs/studentJobs.js')

//Models
var StudentApps = require('../../models/studentApps.model.js')
var Interview = require('../../models/Interview.js')

exports.controller = function (ctrl) {
  StudentApps.fetchApps(ctrl);
  StudentApps.fetchInfo(ctrl);
}

exports.view = function (ctrl) {
  var modelData = StudentApps.all()
  console.log(modelData , " modelData is here")
  return m('.container', [
  	m('.row'),
  	m('.row', [
	    m.component(StudentInfo, { studentInfo: modelData['studentInfo'] } ),
	  	m.component(StudentJobs, { apps: modelData['apps'], studentInfo: modelData['studentInfo'] } ),
    ]),
    m.component(OnsiteInterview, {allInts: modelData['onsiteInterview']}),
    m.component(NewApp)
  ]) 
}