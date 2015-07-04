var m = require('mithril');
var materialize = require('../../../lib/materialize.js');
var Fuzzy = require('../../models/Fuzzy.js');

//Model
var Interview = require('../../models/Interview.js');

//TODO: Comment
exports.controller = function () {
  var ctrl = this;

  ctrl.codingChallenge = Interview.vm();
  ctrl.codingChallenge.type = 'Coding Challenge'


  ctrl.submit  = function (e) {
    e.preventDefault();
    Interview.postInterview(ctrl.codingChallenge)
    .then(function () {
      ctrl.newApp = Interview.vm();
      m.route('/profile');
    });
  }
}

exports.view = function (ctrl, options) { 
  ctrl.codingChallenge.app_id = + options.app_id;
  return m('.row', [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('.row', [
      m('h3.center-align', 'Coding Challenge')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row', [
        m('.row.input-field.col.s12.m12.l12.cent', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea', {
            value: ctrl.codingChallenge.info.questions(),
            onchange: m.withAttr('value', ctrl.codingChallenge.info.questions)
          }),
          m('label[for=icon_prefix2]', "Coding Prompt")
        ]),
      ]),
      m('.row', [
        m('h4.center-align', 'Date')
      ]),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //TODO: Should have a limit of text
          m('input[type=date]', {
            class: 'datepicker', 
            config: materialize.pickDates,
            value: ctrl.codingChallenge.scheduled_on(),
            onchange: m.withAttr('value', ctrl.codingChallenge.scheduled_on)
          }),
          m('label[for=first_name]', "Scheduled For")
        ]),
      ]),
      m('.row', [
        m('button.btn.waves-effect.waves-light', 'Submit',[
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};