var m = require('mithril');
var h = require('highcharts');
var Graph = require('../models/Graph.js');

exports.controller = function () {
  var ctrl = this;
  ctrl.graph = Graph.plot();
  ctrl.cfg = ctrl.graph.plotCfg;
}

exports.plotter = function(ctrl) { // config class
    return function(elem,isin) {
        if(!isin) {
          m.startComputation();
          console.log(Highcharts)
          ctrl.graph.chart.renderTo = elem
          var chart = new Highcharts.Chart(ctrl.graph);
          m.endComputation();
        }
    };
};

exports.view = function(ctrl) { // view
    return  m("html", [ m("body", [
        m("#plot[style=height:400px]", {config: exports.plotter(ctrl)}),
        //when I set breakpoint here I can see plot for a moment. It disappears when I resume normal script flow
        m("p", "some text after plot"), 
        ]),
    ])
};