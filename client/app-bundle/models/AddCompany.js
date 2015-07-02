var m = require('mithril');

var AddCompany = module.exports = {

  
  usersArray: null,
  me: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      name: m.prop(''),
      url: m.prop(''),
      address: m.prop('')
    }
  },

  fetchMe: function() {
    m.request({ method: 'GET', url: '/me/' })
      .then(function(userInfo) {
        Message.me = userInfo.user;
      });
  },

  postCompany: function(data){
      console.log(data, " I AM OVER HERE!")
    return m.request({ method: 'POST', url: 'api/companies', data: data })
  },

  //GETs all messages for current user
  fetch: function () {
    m.request({ methods: 'GET', url: '/API/messages/user/' })
      .then(function(messagesObj){
        Message.messagesArray = null;
        Message.messagesArray = messagesObj.Messages;
      });
  },

  fetchUsers: function() {
    m.request({ methods: 'GET', url: '/API/users' })
      .then(function(usersObj){
        Message.usersArray = null;
        Message.usersArray = usersObj.Users;
      });
  },

  // Makes messages accessible to the view
  all: function() {
    return AddCompany.vm();
  }
};