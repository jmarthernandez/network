var m = require('mithril');


var Message = module.exports = {

  messagesArray: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      sender_uid: m.prop(''),
      reciever_uid: m.prop(''),
      body: m.prop(''),
      app_id: m.prop('')
    }
  },

  //GETs all messages for current user
  fetch: function (req) {
    m.request({ methods: 'GET', url: '/API/messages/user/' })
      .then(function(messagesObj){
        Message.messagesArray = null;
        Message.messagesArray = messagesObj['Messages'];
      });
  },
  //TODO: Set up POST to send messages
  send: function () {
    m.request({ method: 'GET', url: '/API/interviews', data: message });
  },
  
  //Maker fn instantiating messages view-model
  makeVm: function() {
      return Message.vm();
  },

  // Makes messages accessible to the view
  all: function() {
    return Message.messagesArray;
  }

};