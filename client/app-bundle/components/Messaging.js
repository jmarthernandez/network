var m = require('mithril');

//model
var Message   = require('../models/Message.js');

exports.controller = function () {
  var ctrl = this;
  ctrl.message = Message.vm();
  ctrl.allMessages = m.prop();

  ctrl.submit = function (e) {
    e.preventDefault();
    Message.postMessage( ctrl.message )
      .then(function(){
        ctrl.message = Message.vm();
      })
  }

  ctrl.setReceiver = function(e) {
    ctrl.message.sender_uid = e;
  };

};

exports.view = function (ctrl, options) {
  ctrl.selectedUser = '';
  if(ctrl.message.receiver_uid()){
    var user = options.users.filter(function(user){return user.uid === ctrl.message.receiver_uid()});
    ctrl.selectedUser = user[0].name;
  }
  ctrl.allMessages = options.messages; 
  console.log(ctrl.message, 'ctrl.message')
  ctrl.message.sender_uid = options.studentInfo.uid;
  return m( '.row', [
    m('h1.center-align', 'Messages'),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('ul', [
        options.users.map(function(user){
          if(user.uid !== options.studentInfo.uid){
            return m('li', [
              m('a', {
                value: user.uid,
                onclick: m.withAttr('value', ctrl.message.receiver_uid),
              }, user.name),
            ])
          }
        })
      ]),
      m('ul.collection', [
        ctrl.allMessages.map(function(message){
          return m('li.collection-item avatar', [
            m('p', 'From: ' + message.sender_name),
            m('p', 'To: ' + message.receiver_name),
            m('span.title', message.body),
          ])
        })
      ]),
      m('.row', [        
        m('.row.input-field.col.l6.m6.s12', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea', {
            value: ctrl.message.body(),
            onchange: m.withAttr('value', ctrl.message.body)
          }),
          m('label[for=icon_prefix2]', 'Message to : ' + ctrl.selectedUser)
        ])
      ]),
      m('.div.center-align', [
        m('button.btn.waves-effect.waves-light', 'Send Message',[
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};