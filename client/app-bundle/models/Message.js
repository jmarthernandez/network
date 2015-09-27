var m = require('mithril');

var Message = module.exports = {
  messagesArray: null,
  usersArray: null,
  me: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      sender_uid: m.prop(attrs.uid || ''),
      receiver_uid: m.prop(attrs.id || ''),
      body: m.prop(''),
    };
  },

  fetchMe: function() {
    m.request({ method: 'GET', url: '/me/' })
      .then(function(userInfo) {
        Message.me = userInfo.user;
      });
  },

  postMessage: function(message){
    return m.request({ method: 'POST', url: 'api/messages', data: message })
      .then(function (serverResponse) {
        Message.fetch();
        Message.all();
        return serverResponse
    })
  },

  //Get all messages for current user
  fetch: function () {
    m.request({ methods: 'GET', url: '/API/users/messages/' })
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

  // Make messages accessible to view
  all: function() {
    return {
      messages: Message.messagesArray,
      users: Message.usersArray,
      me: Message.me
    }
  }
};