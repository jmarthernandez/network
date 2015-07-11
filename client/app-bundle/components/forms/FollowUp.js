var m         = require('mithril');
var Interview   = require('../../models/Interview.js');

//rename to Interview
exports.controller = function () {
	var ctrl = this;
  ctrl.interview = Interview.vm();

  // controller action
  ctrl.submit = function (e) {
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
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row',[
        m('h3.center-align', 'Follow up')
      ]),
      m('.row', [
        m('.input-field.col.s12.m6',[
          //Should have a limit of text
          m('input.validate[type=text][placeholder=Follow Up?]', {
            value: ctrl.interview.follow_up(),
            onchange: m.withAttr('value', ctrl.interview.follow_up),
          }),
          m('label', 'Follow Up?')
        ]),
        m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input.validate[type=text][placeholder=How prepared did you feel?]', {
            value: ctrl.interview.preparedness(),
            onchange: m.withAttr('value', ctrl.interview.preparedness),
          }),
          m('label', 'How prepared did you feel?')
        ]),     
      ]),
     m('.row', [
        m('.input-field.col.s12', [
          //Should have a limit of text
          m('input.validate[type=text][placeholder=What technical questions were asked?]', {
            value: ctrl.interview.info.questions(),
            onchange: m.withAttr('value', ctrl.interview.info.questions),
          }),
          m('label', 'What technical questions were asked?')
        ]), 
      m('p.range-field.col.s12', 'How did it go?',[
        m('input#test5[type=range][min=0][max=5]', {
            value: ctrl.interview.quality(),
            onchange: m.withAttr('value', ctrl.interview.quality),
          }),
      ]),
      ]),
    //  m('.row', [
    // ]),
      m('.row', [
        m('button.btn.waves-effect.waves-light', 'Submit', [
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};