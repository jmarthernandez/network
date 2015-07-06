var m         = require('mithril');
var materialize = require('../../../lib/materialize.js');
var Fuzzy = require('../Fuzzysearch.js')
var Contacts = require('./AddContact.js')

//Model
var Interview   = require('../../models/Interview.js');

//rename to Interview
exports.controller = function () {
	var ctrl = this;

  // Instantiate view-model
  ctrl.interview = Interview.vm();
  ctrl.interview.type = 'Onsite Interview';

  // controller action
  ctrl.submit = function (e) {
    e.preventDefault();
    Interview.postInterview( ctrl.interview )
      .then(function () {
        ctrl.interview = Interview.vm();
        m.route('/profile');
      })
  }
}

exports.view = function (ctrl, options) {
  var modelData = Interview.all();
console.log(options.app_id, 'CTRONERS')
  return m('.row', [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('.row', [
      m('h3.center-align', 'Onsite Interview')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row',
        m('h4.center-align', 'Interviewer')
      ),
      m('.row',[
        m.component(Fuzzy, {
          search: 'contacts',
          onSelect: function (name) {
            ctrl.interview.contacts = name;
          },
          name: 'Contact',
          placeholder: 'Name',
          optionView: function (contacts) { 
            return contacts.name + "  -  " + contacts.phone_number + "  -  " + contacts.company_name
           },
           route: m('a.waves-effect.waves-light.btn[href=/contacts/' + options.app_id + ']', { config: m.route }, 'Add a Contacts')
        }),
      ]),
      m('.row',
        m('h4.center-align', 'Date')
      ),
      m('.row', [
        m('.input-field.col.s12.m6', [
          m('input[type=date][placeholder=Scheduled For]', {
            class: 'datepicker', 
            config: materialize.pickDates, 
            value: ctrl.interview.scheduled_on(),
            onchange: m.withAttr('value', ctrl.interview.scheduled_on),
          }),
        ]),
      ]),
      m('.row', [
        m('button.btn.waves-effect.waves-light', 'Submit', [
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};