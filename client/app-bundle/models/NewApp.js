var m           = require('mithril');
// var StudentApp  = require('StudentApp.js');

var NewApp = module.exports = {

  vm: function(attrs) {
    attrs || '';

    return {
        phase: m.prop(1),
        applied_on: m.prop(),
        contact_id: m.prop(),
        app_method: m.prop(),
        user_id: m.prop(),
        active: m.prop(true),
        title_id: m.prop(), 
        company_id: m.prop(),
    };
  }, 

  all: function() {
    return NewApp.vm();
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

  //   m.request({
  //       method: 'POST',
  //       url: '/API/applications/',
  //       data: ctrl.newAppForm,
  //       }).then(function(data) {
  //         console.log(data, 'postApp');
  //         // m.redraw.strategy('all')
  //       })
  // };

  postNewApplication: function(applicationFormData) {
    return m.request({ method: 'POST', url: '/API/applications/', data: applicationFormData})
  }

};