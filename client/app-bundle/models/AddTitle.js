var m = require('mithril');

var AddTitle = module.exports = {

  //View-model for add title form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      title: m.prop('')
    }
  },

  //Post title to database if doesn't exist already
  postTitle: function(data){
    return m.request({ method: 'POST', url: 'api/titles', data: data })
  },

  // Makes AddContacts.vm accessible to the view
  all: function() {
    return AddContacts.vm();
  }
};