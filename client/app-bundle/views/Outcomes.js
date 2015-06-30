var m = require('mithril');

//Components
var CurrentApps = require('../components/CurrentApps.js');

//Models
var App = require('../models/App.js');

exports.controller = function() {
  //Grabs apps for all students
  App.fetch();
};

exports.view = function(ctrl) {
  var apps = App.all();

  return m('.container', [
    m('h1.center-align', 'Student Outcomes'),
    m.component(CurrentApps, {apps: apps})
  ]);
};