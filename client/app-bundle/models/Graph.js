var m           = require('mithril');
var h           = require('highcharts')
var submitApp;

var Graph = module.exports = {

  fetchApplication: function(req) {
    return m.request({ method: 'GET', url: '/API/applications/'})
                  .then(function (applications) {
                    submitApp = 2000;
                    console.log(applications.Application[0].phase);
                    // console.log(Graph.plot().series[0].data[0][1])
                    return {
                      submitted: 9234,
                      phoneScreens: 4064,
                      interviews: 1987,
                      offers: 976,
                      acceptedOffers: 846,
                    }
                  })
  },

  fetchInterview: function (req) {
    return m.request({ methods: 'GET', url: '/API/interviews/' })
      .then(console.log('Interviews GET request'), req);
  },
};


  // List of all companies all students has applied fo