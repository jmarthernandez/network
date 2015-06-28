var m = require('mithril');


var Messages = module.exports = {

  messagesArray: null,

  vm: function (attrs) {
    attrs = attrs || '';

    return {
      sender_uid: m.prop(''),
      reciever_uid: m.prop(''),
      body: m.prop(''),
      app_id: m.prop('')
    }
  },

  fetch: function (req) {
    m.request({
        methods: 'GET',
        url: '/API/messagestoo/',

    }).then(function(messagesObj){
      Messages.messagesArray = null;
      Messages.messagesArray = messagesObj['Messages'];
    });
  },

  send: function () {
    m.request({
        method: 'GET',
        url: '/API/interviews',
        data: ints,
    })
  },
  
  makeVm: function() {
      return Messages.vm()
  },

  all: function() {
    return Messages.messagesArray;
  }

};