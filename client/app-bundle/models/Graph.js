var m           = require('mithril');
var h           = require('highcharts')

var Graph = module.exports = {

  appCount: function(applications) {
    var count = 0;
    var apps = applications.Application;
    for(var i = 0; i < apps.length; i++) {
      var app = apps[i];
      if(app.phase === '1') {
        count++
      }
    }
    return count;
  },

  phoneCount: function(interviews) {
    var count = 0;
    for(var i = 0; i < interviews.length; i++) {
      var interview = interviews[i];
      if(interview.type === 'phone') {
        count++
      }
    }
    return count;
  },
  // fetchApplication: function(req) {
  //   return m.request({ method: 'GET', url: '/API/applications/'})
  //                 .then(function (applications) {
  //                 var phases = Graph.appCount(applications);


  //                   // console.log(Graph.plot().series[0].data[0][1])
  //                   return {
  //                     submitted: phases,
  //                     phoneScreens: 4064,
  //                     interviews: 1987,
  //                     offers: 976,
  //                     acceptedOffers: 846,
  //                   }
  //                 })
  // },
  fetchAll: function(req) {
    return m.request({ method: 'GET', url: '/API/interviews/all/'})
                  .then(function (all) {
                    
                    console.log('all', all);
                  // var phases = Graph.appCount(applications);


                    // console.log(Graph.plot().series[0].data[0][1])
                    return {
                      submitted: phases,
                      phoneScreens: 4064,
                      interviews: 1987,
                      offers: 976,
                      acceptedOffers: 846,
                    }
                  })
    },

  // fetchInterview: function (req) {
  //   return m.request({ methods: 'GET', url: '/API/interviews/' })
  //     .then(function(interviews) {});
  // },
};


  // List of all companies all students has applied fo