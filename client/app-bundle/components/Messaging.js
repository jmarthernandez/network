var m = require('mithril');

//model
var Message   = require('../models/Message.js');
// TODO: Set up post request body
exports.controller = function () {
  var ctrl = this;
  ctrl.message = Message.vm();

  ctrl.submit = function (e) {
    e.preventDefault();
    Message.postMessage( ctrl.message );
  }

  ctrl.setReceiver = function(e) {
    ctrl.message.sender_uid = e;
  };
  
  //Submit button is a post request
    //then clears message body and renders a success toast

  //
};

exports.view = function (ctrl, options) {
  console.log(ctrl.message)
  ctrl.message.sender_uid = options.studentInfo.uid;
  return m( '.row', [
    m('ul.collection', [
      options.messages.map(function(message){
        return m('li.collection-item avatar', [
          // m('img[src=' + options['studentInfo'].avatar_url + '].circle'),
          m('p', 'Sender: ' + message.sender_name),
          m('span.title', message.body),
          // m('p', 'Active: ' + app.active),
          // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
        ])
      })
    ]),
    m('h1.center-align', 'Messages'),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('ul', [
        options.users.map(function(user){
          return m('li', [
            m('a', {
              value: user.uid,
              onclick: m.withAttr('value', ctrl.message.receiver_uid)
            }, user.name),
          ])
        })
      ]),
      m('.row', [

        // <a class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>

        // <!-- Dropdown Structure -->
        // <ul id='dropdown1' class='dropdown-content'>
        //   <li><a href="#!">one</a></li>
        //   <li><a href="#!">two</a></li>
        //   <li class="divider"></li>
        //   <li><a href="#!">three</a></li>
        // </ul>
              
        
        m('.row.input-field.col.l6.m6.s12', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea', {
            value: ctrl.message.body(),
            onchange: m.withAttr('value', ctrl.message.body)
          }),
          m('label[for=icon_prefix2]', "Message")
        ])
      ]),
      m('.div.center-align', [
        m('button.btn.waves-effect.waves-light', 'Send Message',[
          //POST to database
          m('i.mdi-content-send')
        ])
      ])
    ])
  ]);
};