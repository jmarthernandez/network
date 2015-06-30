var m = require('mithril');

var StudentApp = require('StudentApp.model.js')

// StudentApps.apps

var newApp = module.exports = {

  autocomplete: null,

  };

  all: function() {
    return newApp.autocomplete;
  },

  // All student profile info uid (e.g. avatar, name ...)
  fetchInfo: function() {
    m.request({ method: 'GET', url: "/me/" })
      .then(function(userInfo) {
        studentApp.studentInfo = userInfo.user;
      })
  },

  // List of all companies all students has applied for
  fetchAutocomplete: function() {
    m.request({ method: 'GET', url: '/API/companies/' })
      .then(function(companies) {
        console.log(companies,'in helper')
        studentApp.autocomplete = companies.Companies;
      });
  },

//POST requests

  postNewApplication: function(applicationFormData) {
    m.request({ method: 'POST', url: '/API/applications/', data: applicationFormData})
  }

};