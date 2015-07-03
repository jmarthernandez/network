var m = require('mithril');

var AddContacts = module.exports = {

  
  usersArray: null,
  me: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      name: m.prop(''),
      phone_number: m.prop(''),
      company_id: m.prop('')
    }
  },

  postContacts: function(data){
      console.log(data, " I AM OVER HERE!")
    return m.request({ method: 'POST', url: 'api/contacts', data: data })
  },
  // Makes messages accessible to the view
  all: function() {
    return AddContacts.vm();
  }
};