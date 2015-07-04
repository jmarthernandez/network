var m = require('mithril');
var materialize = require('../../../lib/materialize.js');

//Model
var Interview   = require('../../models/Interview.js');

//TODO: comment
exports.controller = function () {
  var ctrl = this;

  // Instantiate view-model
  ctrl.interview = Interview.vm();
  ctrl.interview.type = 'Phone Screen';

  // controller action
  ctrl.submit = function (e) {
    e.preventDefault();
    Interview.postInterview( ctrl.interview )
      .then(function () {
        ctrl.interview = Interview.vm();
        m.route('/profile')
      })
  }
}


exports.view = function (ctrl) {
  return m('.row', [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('.row', [
      m('h3.center-align', 'Phone Screen')
    ]),
    m('form.col.s12', { config: m.route }, [
      m('.row',
        m('h4.center-align', 'Person Contacted')
      ),
      m('.row',[
        m('.input-field.col.s12.m4', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder=Name]'),
          m('label[for=first_name]', 'Name')
        ]),
        m('.input-field.col.s12.m4', [
          m('input#first_name.validate[type=text][placeholder=Role]'),
          //Should autocomplete for common methods
          m('label[for=first_name]', 'Role')
        ]),
        m('.input-field.col.s12.m4', [
          m('input#first_name.validate[type=email][placeholder=Email]'),
          //Should autocomplete for common methods
          m('label[for=first_name]', 'Email')
        ])
      ]),
      m('.row',
        m('h4.center-align', 'Date')
      ),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input[type=date][placeholder=Scheduled For]', {
            class: 'datepicker', 
            config: materialize.pickDates, 
            value: ctrl.interview.scheduled_on(),
            onchange: m.withAttr('value', ctrl.interview.scheduled_on),
          })
        ])
      ]),
      m('p.range-field', 'How did it go?',[
        m('input#test5[type=range][min=0][max=5]')
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