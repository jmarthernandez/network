var m = require('mithril');
var Fuzzy = require('../../models/Fuzzy.js');

//Model
var CodingChallenge = require('../../models/CodingChallenge.js');

//TODO: Comment
exports.controller = function () {
  var ctrl = this;

  ctrl.codingChallenge = CodingChallenge.vm();

  ctrl.submit  = function (e) {
    console.log('hi')
    e.preventDefault();
    CodingChallenge.post(ctrl.codingChallenge).then(function () {
      ctrl.newApp = CodingChallenge.vm();
    });
  }
}

exports.view = function (ctrl) {
  return m('.row', [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('.row', [
      m('h3.center-align', 'Coding Challenge')
    ]),
    m('form.col.s12' , [
      m('.row', [
        m('h4.center-align', 'Interviewer')
      ]),
      m('.row',[
        m('.input-field.col.s12.m4', [
          //TODO: Should have a limit of text
          m('input#first_name.validate[type=text][placeholder="Name"]'),
          m('label[for=first_name]', "Name")
        ]),
        m('.input-field.col.s12.m4', [
          m('input#first_name.validate[type=text][placeholder="Role"]'),
          //TODO: Should autocomplete for common methods
          m('label[for=first_name]', "Role")
        ]),
        m('.input-field.col.s12.m4', [
          m('input#first_name.validate[type=email][placeholder="Email"]'),
          //TODO: Should autocomplete for common methods
          m('label[for=first_name]', "Email")
        ])
      ]),
      m('.row', [
        m('.row.input-field.col.l6.m6.s12', [
          m('i.mdi-editor-mode-edit.prefix'),
          m('textarea#icon_prefix2.materialize-textarea'),
          m('label[for=icon_prefix2]', "Coding Prompt")
        ]),
        m('.row', [
          m('button.btn.waves-effect.waves-light', 'Submit Prompt',[
            //POST to database
            m('i.mdi-content-send.right')
          ])
        ])
      ]),
      m('.row', [
        m('h4.center-align', 'Date')
      ]),
      m('.row', [
        m('.input-field.col.s12.m6', [
          //TODO: Should have a limit of text
          m('input#first_name.datepicker[type=date][placeholder="Date Applied"]'),
          m('label[for=first_name]', "Scheduled For")
        ]),
        // These should be in the update form
        // m('.input-field.col.s12.m6', [
        //   m('input#first_name.datepicker[type=date][placeholder="Date Applied"]'),
        //   m('label[for=first_name]', "Completed On")
        // ])
      ]),
      // m('p.range-field', 'How did it go?',[
      //   m('input#test5[type=range][min=0][max=5]')
      // ]),
      m('.row', [
        m('button.btn.waves-effect.waves-light', 'Submit',[
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};