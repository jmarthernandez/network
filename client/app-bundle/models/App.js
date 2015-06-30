var m = require('mithril');

var App = module.exports = {

  // Organizes apps by phase 
  apps: {1: [], 2: [], 3: []},

// GET requests

  // All open applications for all students 
  fetch: function() {
    m.request({ method: 'GET', url: '/API/applications/all' })
      .then(function(applicationsResponse) {
        App.apps = {1: [], 2: [], 3: []};
        applicationsResponse.Applications.forEach(function(app){
          App.apps[app.phase].push(app);
        })
      })
  },

  // Makes apps info accessible to view
  all: function() {
    return App.apps;
  }
};