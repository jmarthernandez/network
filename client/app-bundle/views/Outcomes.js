var m = require('mithril');

//Components
var CurrentApps = require('../components/CurrentApps.js');

//Models
var AllApps = require('../models/AllApps.js');

exports.controller = function() {
  //Grabs apps for all students
  AllApps.fetch();
};

exports.view = function(ctrl) {
  var apps = AllApps.all();

  return m('.container', [
    m('h1.center-align', 'Student Outcomes'),
    m.component(CurrentApps, {apps: apps})
  ]);
};