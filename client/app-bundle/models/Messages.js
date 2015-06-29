var m = require('mithril');


var Messages = module.exports = {

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
    m.request({
        methods: 'GET',
        url: '/API/messagestoo/',

    }).then(function(messagesObj){
      Messages.messagesArray = null;
      Messages.messagesArray = messagesObj['Messages'];
    });
  },
  //TODO: Set up POST to send messages
  send: function () {
    m.request({
        method: 'GET',
        url: '/API/interviews',
        data: ints,
    })
  },
  
  //Maker fn instantiating messages view-model
  makeVm: function() {
      return Messages.vm()
  },

  all: function() {
    return Messages.messagesArray;
  }

};