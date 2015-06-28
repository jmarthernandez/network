var m = require('mithril');

exports.controller = function () {
  var ctrl = this;

  //Create view model for message body
    // vm : {sender_id: '', reciever_id: '', app_id: '', body: '' }

  //Submit button is a post request
    //then clears message body and renders a success toast

  //
}

exports.view = function (ctrl, options) {
      console.log(options, 'Messages in component')
  return m( '.row', [
    m('h1.center-align', 'Pending Applications'),
    m('ul.collection', [
      options['messages'].map(function(message){
        return m('li.collection-item avatar', [
          // m('img[src=' + options['studentInfo'].avatar_url + '].circle'),
          m('p', 'Sender: ' + message.sender_name),
          m('span.title', message.body),
          // m('p', 'Active: ' + app.active),
          // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
        ])
      })
    ])
  ])
  // return m('.row', [
  //   m('form.col.s12', [
  //     m('.row', [
  //       m('.row.input-field.col.l6.m6.s12', [
  //         m('i.mdi-editor-mode-edit.prefix'),
  //         m('textarea#icon_prefix2.materialize-textarea'),
  //         m('label[for=icon_prefix2]', "Message")
  //       ]),
  //       m('.row', [
  //         m('button.btn.waves-effect.waves-light', 'Send Message',[
  //           //POST to database
  //           m('i.mdi-content-send.right')
  //         ])
  //       ])
  //     ])
  //   ])
  // ])
}