var m           = require('mithril');
var h           = require('highcharts')

var Graph = module.exports = {

  plot: function (attrs) {
    attrs = attrs || '';

    return {
        chart: {
            type: 'funnel',
            marginRight: 100
        },
        title: {
            text: 'Sales funnel',
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
            name: 'Unique users',
            data: [
                ['Website visits',   15654],
                ['Downloads',       4064],
                ['Requested price list', 1987],
                ['Invoice sent',    976],
                ['Finalized',    846]
            ]
        }]
    }
  },

  fetchApplication: function(req) {
    return m.request({ method: 'GET', url: '/API/applications/'})
  },

  fetchInterview: function (req) {
    return m.request({ methods: 'GET', url: '/API/interviews/' })
      .then(console.log('Interviews GET request'), req);
  },
};


  // List of all companies all students has applied fo