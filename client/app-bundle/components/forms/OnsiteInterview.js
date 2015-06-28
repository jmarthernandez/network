var m         = require('mithril');
var Interview   = require('../../models/Interview.js');

exports.controller = function () {
	var ctrl = this;
  // Interview.fetchInt();
  ctrl.interview = Interview.vm();
  console.log(Interview.vm(), "int vm")

  ctrl.submit = function () {

    Interview.postInterview();
    // Interview.create( ctrl.interview ).then(function() {
    //   console.log('we are submitting')
    //   // Reset VM (or something)
    //   ctrl.interview = Interview.vm()
    // })
  }
}

exports.view = function (ctrl) {
  var modelData = Interview.all();
  // console.log('ha',ctrl.interview.contacts_id(data))

  // ctrl.interview.contacts_id()
  return m('.row', [
    m('.row', [
      m('h3.center-align', 'On-site Interview')
    ]),
    m('form.col.s12' , [
      m('.row',
        m('h4.center-align', 'Interviewer')
      ),
      m('.row',[
        m('.input-field.col.s12.m4', [
          //Should have a limit of text
          m('input.validate[type=text][placeholder="Name"][name=contacts_id]',{
            value: ctrl.interview.contacts_id(),
            onchange: m.withAttr('value', ctrl.interview.contacts_id)
          }),
          m('label', "Name")
        ]),
        m('.input-field.col.s12.m4', [
          m('input.validate[type=text][placeholder="Role"][name=role]', {
            value: ctrl.interview.role(),
            onchange: m.withAttr('value', ctrl.interview.role)
          }),
          //Should autocomplete for common methods
          m('label[for=first_name]', "Role")
        ]),
        m('.input-field.col.s12.m4', [
          m('input.validate[type=email][placeholder="Email"]', console.log('view', JSON.stringify(ctrl.interview))),
          //Should autocomplete for common methods
          m('label[for=first_name]', "Email")
        ])
      ]),
      m('.row',
        m('h4.center-align', 'Date')
      ),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input.datepicker[type=date][placeholder="scheduled_date"]', {
            value: ctrl.interview.scheduled_date(),
            onchange: m.withAttr('value', ctrl.interview.scheduled_date),
          }),
          m('label[for=first_name]', "Scheduled For")
        ]),
        m('.input-field.col.s12.m6', [
          m('input.datepicker[type=date][placeholder="occured_date"]',{
            value: ctrl.interview.occured_date(),
            onchange: m.withAttr('value', ctrl.interview.occured_date),
          }),

          m('label[for=first_name]', "Completed On")
        ])
      ]),
      // <p class="range-field">
      //   <input type="range" id="test5" min="0" max="100" />
      // </p>
      m('p.range-field', 'How did it go?',[
        m('input#test5[type=range][min=0][max=5]', {
          value: ctrl.interview.preparedness(),
          onchange: m.withAttr('value', ctrl.interview.preparedness),
        })
      ]),
      m('.row', [
        m('button.btn.waves-effect.waves-light', 'Submit', {onclick: ctrl.submit},[
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ])
}