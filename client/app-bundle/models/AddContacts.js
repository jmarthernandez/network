var m = require('mithril');

var AddContacts = module.exports = {

  //View-model for add contact form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      name: m.prop(''),
      phone_number: m.prop(''),
      company_id: m.prop('')
    }
  },

  //Post contact to database if doesn't exist already
  postContacts: function(data){
    return m.request({ method: 'POST', url: 'api/contacts', data: data })
  },
  
  // Makes AddContacts.vm accessible to the view
  all: function() {
    return AddContacts.vm();
  }
};