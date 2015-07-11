var m = require('mithril');

var AddCompany = module.exports = {

  //View-model for add company form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      name: m.prop(''),
      url: m.prop(''),
      address: m.prop('')
    }
  },

  //Post company to database if doesn't exist already
  postCompany: function(data){
    return m.request({ method: 'POST', url: 'api/companies', data: data })
  },

  // Makes AddCompany.vm accessible to the view
  all: function() {
    return AddCompany.vm();
  }
};