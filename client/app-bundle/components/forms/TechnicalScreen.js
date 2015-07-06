var m = require('mithril');
var materialize = require('../../../lib/materialize.js');

//TODO: comment
var Interview   = require('../../models/Interview.js');

//TODO: comment
exports.controller = function () {
  var ctrl = this;

  // Instantiate view-model
  ctrl.interview = Interview.vm();
  ctrl.interview.type = 'Technical Screen';
  ctrl.update = Interview.vmApp();

  // controller action
  ctrl.submit = function (e) {
    e.preventDefault();
    Interview.postInterview( ctrl.interview )
      .then(function () {
        Interview.updatePhase(ctrl.update);
      })
      .then(function () {
        ctrl.interview = Interview.vm();
        m.route('/profile');
      })
  };
};

exports.view = function (ctrl, options) {
  ctrl.interview.app_id = + options.app_id;
  return m('.row', [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('.row', [
      m('h1.center-align', 'Technical Screen')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row', [
        m('.input-field.col.s12.m12', [
          //Should have a limit of text
          m('input#first_name.datepicker[type=date][placeholder="Scheduled Date"]', {
            class: 'datepicker', 
            config: materialize.pickDates, 
            value: ctrl.interview.scheduled_on(),
            onchange: m.withAttr('value', ctrl.interview.scheduled_on),
          }),
          m('label[for=first_name]', 'Scheduled Date')
        ])
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