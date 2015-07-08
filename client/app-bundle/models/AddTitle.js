var m = require('mithril');

var AddTitle = module.exports = {

  
  usersArray: null,
  me: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      title: m.prop('')
    }
  },

  postTitle: function(data){
    return m.request({ method: 'POST', url: 'api/titles', data: data })
  },
  // Makes messages accessible to the view
  all: function() {
    return AddContacts.vm();
  }
};