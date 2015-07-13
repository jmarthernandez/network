var m    = require('mithril');
var Graph  = require('./OutcomesGraph.js');
var StudentProgress = require('./StudentProgress.js');
var PresentGraph  = require('./PresentGraph.js');
var materialize = require('../../lib/materialize.js');
  
  
exports.view = function(ctrl) {
  return m('div.slider', {config: materialize.carosel}, [
    m('ul.slides', [
      m('li', [
        m.component(Graph),
      ]),
      m('li', [
        m.component(StudentProgress)
      ]),
      m('li', [
        m.component(PresentGraph)
      ])
    ])
  ]);
};