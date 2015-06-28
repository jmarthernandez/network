var m = require('mithril');

var App = module.exports = {

  apps: {1: [], 2: [], 3: []},
// GET requests

  // All open applications for all students
  
  fetch: function() {
    m.request({ method: 'GET', url: '/API/allApps' })
      .then(function(applicationsResponse) {
        App.apps = {1: [], 2: [], 3: []}
        applicationsResponse.Applications.forEach(function(app){
          App.apps[app.phase].push(app)
        })
      })
  },
  all: function() {
    return App.apps
  }
};