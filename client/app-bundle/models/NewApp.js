var m           = require('mithril');
var StudentApp  = require('./StudentApp.js');

var NewApp = module.exports = {

  vm: function(attrs) {
    attrs || '';

    return {
        phase: m.prop(1),
        applied_on: m.prop(null),
        contact_id: m.prop(null),
        app_method: m.prop(null),
        user_id: m.prop(StudentApp.studentInfo.uid),
        active: m.prop(true),
        title_id: m.prop(null), 
        company_id: m.prop(null),
    };
  }, 

  all: function() {
    return NewApp.vm();
  },

  // All student profile info uid (e.g. avatar, name ...)
  fetchInfo: function() {
    return m.request({ method: 'GET', url: "/me/" })
      .then(function(userInfo) {
        StudentApp.studentInfo = userInfo.user;
      })
  },

  // List of all companies all students has applied for
  fetchAutocomplete: function() {
    m.request({ method: 'GET', url: '/API/companies/' })
      .then(function(companies) {
        StudentApp.autocomplete = companies.Companies;
      });
  },

  postNewApplication: function(applicationFormData) {
    return m.request({ method: 'POST', url: '/API/applications/', data: applicationFormData});
  }
};