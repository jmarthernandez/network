var m = require('mithril');
var h = require('highcharts');
var Graph = require('../models/Graph.js');

exports.controller = function () {
  var ctrl = this;

  ctrl.appFetch = Graph.fetchApplication().then(function(appData) {
    ctrl.graphOptions = graphOptions(appData);
  })
  // ctrl.fetchInterview = Graph.fetchInterview().then(function(appData) {
  //   ctrl.graphOptions = graphOptions(appData);
  // })
      // .then(function (applications) {submitApp = 2000; console.log(applications.Application[0].phase); console.log(Graph.plot().series[0].data[0][1]) });
}

exports.plotter = function(ctrl) { // config class
    return function(elem,isin) {
        if(!isin) {
          // m.startComputation();
          // console.log(Highcharts)
          ctrl.graphOptions.chart.renderTo = elem
          console.log("Using options:", ctrl.graphOptions)
          var chart = new Highcharts.Chart(ctrl.graphOptions);
          // m.endComputation();
        }
    };
};

exports.view = function(ctrl) { // view
    return  m("html", [ m("body", [
        m("#plot[style=height:400px]", {config: exports.plotter(ctrl)}), console.log(ctrl),
        //when I set breakpoint here I can see plot for a moment. It disappears when I resume normal script flow
        m("p", "some text after plot", console.log(JSON.stringify(ctrl.appFetch))),
        ]),
    ])
};

function graphOptions (graphData) {
  return {
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Job Search Tracker',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                },
                neckWidth: '30%',
                neckHeight: '25%'

                //-- Other available options
                // height: pixels or percent
                // width: pixels or percent
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Students',
            data: [
                ['Applications Submitted',  graphData.submitted],
                // ['Applications Submitted',  submitApp, undefined],
                [' Phones Screens',       graphData.phoneScreens],
                ['Onsite Interviews', graphData.interviews],
                ['Offers',    graphData.offers],
                ['Accepted Offers',    graphData.acceptedOffers]
            ]
        }]
    }
}
