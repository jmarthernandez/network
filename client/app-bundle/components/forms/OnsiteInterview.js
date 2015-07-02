var m         = require('mithril');
var Interview   = require('../../models/Interview.js');
var materialize = require('../../../lib/materialize.js');
var Fuzzy = require('../../models/Fuzzy.js')


//rename to Interview
exports.controller = function () {
	var ctrl = this;

  // Instantiate view-model
  ctrl.interview = Interview.vm();

  // controller action
  ctrl.submit = function (e) {
    console.log("hi")
    e.preventDefault();
    Interview.postInterview( ctrl.interview ).then(function () {
      ctrl.interview = Interview.vm();
    })
  }
}

exports.view = function (ctrl) {
  var modelData = Interview.all();

  return m('.row', [
    m('.row', [
      m('h3.center-align', 'Interview')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row',
        m('h4.center-align', 'Type')
      ),
      m('.row', [
        m('.input-field.col.s12', [
          m('input.validate[type=text][placeholder=Type]', {
            value: ctrl.interview.type(),
            onchange: m.withAttr('value', ctrl.interview.type)
          }),
          //Should autocomplete for common methods
          // m('label', 'Type')
        ]),
      ]),
      m('.row',
        m('h4.center-align', 'Interviewer')
      ),
      m('.row',[
        m.component(Fuzzy, {
          search: 'contacts',
          onSelect: function (name) {
            ctrl.interview.contacts = name;
          },
          placeholder: 'Name',
          optionView: function (contacts) { 
            return contacts.name + "  -  " + contacts.phone_number + "  -  " + contacts.company_id
           }
        }),
        // m('.input-field.col.s12.m4', [
        //   m('input.validate[type=text][placeholder=Role]', {
        //     value: ctrl.interview.role(),
        //     onchange: m.withAttr('value', ctrl.interview.role)
        //   }),
        //   //Should autocomplete for common methods
        //   m('label[for=first_name]', 'Role')
        // ]),
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
          }),
        ]),
        m('.input-field.col.s12.m6', [
          m('input[type=date][placeholder=Completed On]',{
            class: 'datepicker', 
            config: materialize.pickDates, 
            value: ctrl.interview.occured_on(),
            onchange: m.withAttr('value', ctrl.interview.occured_on),
          }),
        ])
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