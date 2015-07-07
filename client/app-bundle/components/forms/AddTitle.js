var m = require('mithril');
var Fuzzy = require('../Fuzzysearch.js')
var Title = require('../../models/AddTitle.js')


exports.controller = function () {
  var ctrl = this;
  ctrl.addTitle = Title.vm();


  ctrl.submit = function(e){
    e.preventDefault();
    Title.postTitle(ctrl.addTitle)
      .then(function(){
        ctrl.addTitle = Title.vm();
        ctrl.back();
      })
  }


  ctrl.back = function(e){
    window.history.back();
  }
};

exports.view = function (ctrl) {

  return m('form.col.s12' , { onsubmit: ctrl.submit }, [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('h4.center-align', 'Add a Title'),
    m('.row', [
      m('.input-field.col.s12.m4', [
        m('input[type=text]', {
          value: ctrl.addTitle.title(),
          onchange: m.withAttr('value', ctrl.addTitle.title)
        }),
        m('label', 'Title')
    ]),
    m('.row.center-align', [
      m('button.btn.waves-effect.waves-light', 'Submit',  [
        m('i.mdi-content-send.right')
      ])
    ])
  ])
    ])
};