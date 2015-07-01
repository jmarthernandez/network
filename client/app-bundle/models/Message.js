var m = require('mithril');

var Message = module.exports = {

  messagesArray: null,
  usersArray: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      sender_uid: m.prop(''),
      receiver_uid: m.prop(''),
      body: m.prop(''),
    }
  },

  postMessage: function(message){
    m.request({ method: 'POST', url: 'api/messages', data: message })
      .then(function (serverResponse) {
        return serverResponse
      })
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

  //TODO: Set up POST to send messages
  send: function () {
    m.request({ method: 'GET', url: '/API/interviews', data: message });
  },

  // Makes messages accessible to the view
  all: function() {
    return {
      messages: Message.messagesArray,
      users: Message.usersArray
    }
  }
};