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

  postCompany: function(data){
    return m.request({ method: 'POST', url: 'api/companies', data: data })
  },

  // Makes messages accessible to the view
  all: function() {
    return AddCompany.vm();
  }
};