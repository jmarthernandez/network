var m = require('mithril')

//Components
var Phases         = require('../components/Phases.js')
var OutcomesGraph  = require('../components/OutcomesGraph.js')
var Messaging      = require('../components/Messaging.js')
var CurrentApps    = require('../components/CurrentApps.js')

//Models
var AllApps = require('../models/AllApps.model.js')

exports.controller = function () {
  AllApps.fetch()
}

exports.view = function(ctrl) {
  var apps = AllApps.all()

  return m('.container', [
    m('h1.center-align', 'Student Outcomes'),
    // m.component(OutcomesGraph),
    // m.component(Phases),
    // m.component(Messaging),
    m.component(CurrentApps, {apps: apps})
  ])
}