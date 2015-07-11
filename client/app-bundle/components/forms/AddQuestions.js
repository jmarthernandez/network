var m = require('mithril');
var Fuzzy = require('../Fuzzysearch.js');
var Questions = require('../../models/AddQuestions.js');


exports.controller = function () {
  var ctrl = this;
  ctrl.addQuestion = Questions.vm();

  ctrl.submit = function(e){
    e.preventDefault();
    Questions.postQuestions(ctrl.addQuestion)
      .then(function(){
        ctrl.addQuestion = Questions.vm();
        ctrl.back();
      })
  };

  ctrl.back = function(e){
    window.history.back();
  };
};

exports.view = function (ctrl) {

  return m('form.col.s12' , { onsubmit: ctrl.submit }, [
    m('.row', [
      m('a.btn',{ onclick: ctrl.back}, 'Back')
    ]),
    m('h4.center-align', 'Add a Questions'),
    m('.row', [
      m('.input-field.col.s12.m4', [
        m('input[type=text]', {
          value: ctrl.addQuestion.name(),
          onchange: m.withAttr('value', ctrl.addQuestion.name)
        }),
        m('label', 'Questions')
      ]),
      m('.row.center-align', [
        m('button.btn.waves-effect.waves-light', 'Submit',  [
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};