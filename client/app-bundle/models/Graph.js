var m           = require('mithril');
var h           = require('highcharts')

var Graph = module.exports = {

  appCount: function(all) {
    var count = 0;
    var apps = all.Interviews;
    for(var i = 0; i < apps.length; i++) {
      var app = apps[i];
      if(app.phase === '1' && app.active === true) {
        count++
      }
    }
    return count;
  },
  phoneCount: function(all) {
    var count = 0;
    for(var i = 0; i < all.Interviews.length; i++) {
      var interview = all.Interviews[i];
      if(interview.phase === '2' && interview.active === true) {
        count++
      }
    }
    return count;
  },
  onsiteCount: function(all) {
    var count = 0;
    var Interviews = all.Interviews
    for(var i = 0; i < Interviews.length; i++) {
      var interview = Interviews[i];
      if(interview.phase === '3' && interview.active === true) {
        count++
      }
    }
    return count;
  },
  offerCount: function(all) {
    var count = 0;
    var Interviews = all.Interviews
    for(var i = 0; i < Interviews.length; i++) {
      var interview = Interviews[i];
      if(interview.phase === '4' && interview.active === true) {
        count++
      }
    }
    return count;
  },
  acceptedOffers: function(all) {
    var count = 0;
    var Interviews = all.Interviews
    for(var i = 0; i < Interviews.length; i++) {
      var interview = Interviews[i];
      if(interview.phase === '5' && interview.active === true) {
        count++
      }
    }
    return count;
  },

  // Requests all database information 
  fetchAll: function(req) {
    return m.request({ method: 'GET', url: '/API/interviews/all/'})
                  .then(function (all) {
                    
                  var phases = Graph.appCount(all);
                  var phoneInterview = Graph.phoneCount(all);
                  var onSiteInterview = Graph.onsiteCount(all);
                  var offer = Graph.offerCount(all);
                  var acceptOffer = Graph.acceptedOffers(all);

                  // Returns graph data information
                  return {
                      submitted: phases,
                      phoneScreens: phoneInterview,
                      interviews: onSiteInterview,
                      offers: offer,
                      acceptedOffers: acceptOffer,
                    }
                  })
    },
};


  // List of all companies all students has applied fo