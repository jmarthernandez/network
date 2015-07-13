var m         = require('mithril');
var h         = require('highcharts');
var Graph = require('../models/Graph.js');

exports.controller = function () {
	var ctrl = this;

	ctrl.fetchAll = Graph.fetchAll().then(function(appData) {
   ctrl.graphOptions = graphOptions(appData);
 })
};

exports.plotter = function(ctrl) { // config class
  return function(elem,isin) {
    if(!isin) {
          ctrl.graphOptions.chart.renderTo = elem
          var chart = new Highcharts.Chart(ctrl.graphOptions);
        }
      };
    };

exports.view = function(ctrl) { 
  return  m("html", [ m("body", [
    m("#plot[style=height:400px]", {config: exports.plotter(ctrl)}),
    ]),
  ])
};

function graphOptions(graphData) {
	return {
		        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
          enabled:false
        },
        title: {
            text: 'MakerSquare Salaries Male & Female'
        },
        subtitle: {
            text: 'MakerSquare Diversity Team'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Cohort'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Salary'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} cohort, {point.y} $'
                }
            }
        },
        series: [{
            name: 'Female',
            color: 'rgba(223, 83, 83, .5)',
            data: [[1, 51.6], [1, 59.0], [2, 49.2], [3, 63.0], [5, 53.6],
                [6, 59.0], [5, 47.6], [3, 69.8], [2, 66.8], [7, 75.2],
                [16, 76.6], [16, 83.6], [16, 90.0], [16, 74.6], [16, 71.0],
                
              ]

        }, {
            name: 'Male',
            color: 'rgba(119, 152, 191, .5)',
            data: [[4, 65.6], [4, 71.8], [5, 80.7], [7, 72.6], [7, 78.8],
                [14, 74.8], [14, 86.4], [15, 78.4], [16, 62.0], [16, 81.6],
                [8, 55.2], [8, 54.2], [9, 62.5], [10, 42.0], [10, 50.0],
            ]
        }]
  }
}