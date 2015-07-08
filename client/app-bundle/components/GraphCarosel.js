var m    = require('mithril');
var Graph  = require('./OutcomesGraph.js');
var StudentProgress = require('./StudentProgress.js')
var materialize = require('../../lib/materialize.js');
  
  exports.controller = function() {
    ctrl = this;

  }
  
  exports.view = function(ctrl) {
    return m('div.slider', {config: materialize.carosel}, [
      m('ul.slides', [
        m('li', [
          m.component(Graph), console.log('high')
          ]),
        m('li', [
          m.component(StudentProgress)
          ]),
        ]),
      ]) 
  }