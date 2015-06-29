var m = require('mithril');

var studentApps = module.exports = {

  apps: {1: [], 2: [], 3: []},
  studentInfo: null,
    
  // All open applications for all students
  fetchApps: function(ctrl) {
    if(ctrl.thisUserId){
      m.request({ method: 'GET', url: '/api/applications/' + ctrl.thisUserId})
      .then(function(applications) {
        studentApps.apps = {1: [], 2: [], 3: []}
        applications.Applications.forEach(function(app){
          studentApps.apps[app.phase].push(app)
        })
      });
    } else {
      m.request({ method: 'GET', url: '/api/appswithcompanies/'})
      .then(function(applications) {
        studentApps.apps = {1: [], 2: [], 3: []}
        applications.Applications.forEach(function(app){
          studentApps.apps[app.phase].push(app)
        })
      });
    }
  },

  all: function() {
    return {
      apps: studentApps.apps,
      studentInfo: studentApps.studentInfo
    };
  },

  // All student profile info uid (e.g. avatar, name ...)
  //TODO: grab student school and active attributes
  fetchInfo: function(ctrl) {
    if(ctrl.thisUserId){
    m.request({ method: 'GET', url: 'api/users/' + ctrl.thisUserId })
      .then(function(userInfo) {
        studentApps.studentInfo = userInfo.Users[0];
      })
    } else {
      m.request({ method: 'GET', url: '/me/' })
      .then(function(userInfo) {
        studentApps.studentInfo = userInfo.user;
      })
    }
  }

};