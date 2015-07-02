var m         = require('mithril');
var Interview   = require('../../models/Interview.js');
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
      m('h3.center-align', 'On-site Interview')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row',
        m('h4.center-align', 'Type')
      ),
      m('.row', [
        m('.input-field.s12.m4', [
          m('input.validate[type=text][placeholder=Type]', {
            value: ctrl.interview.type(),
            onchange: m.withAttr('value', ctrl.interview.type)
          }),
          //Should autocomplete for common methods
          m('label', 'Type')
        ]),
      ]),
      m('.row',
        m('h4.center-align', 'Interviewer')
      ),
      m('.row',[
        m('.input-field.s12.m4', [
          //Should have a limit of text
          m('input.validate[type=text][placeholder=Name]',{
            value: ctrl.interview.contacts(),
            onchange: m.withAttr('value', ctrl.interview.contacts)
          }, console.log(JSON.stringify(ctrl.interview))),
          m('label', 'Name')
        ]),
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
          m('input.datepicker[type=date][placeholder=scheduled_on]', {
            value: ctrl.interview.scheduled_on(),
            onchange: m.withAttr('value', ctrl.interview.scheduled_on),
          }),
          m('label', 'Scheduled For')
        ]),
        m('.input-field.col.s12.m6', [
          m('input.datepicker[type=date][placeholder=occured_on]',{
            value: ctrl.interview.occured_on(),
            onchange: m.withAttr('value', ctrl.interview.occured_on),
          }),
          m('label', 'Completed On')
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