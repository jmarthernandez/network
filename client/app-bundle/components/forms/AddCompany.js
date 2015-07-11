var m = require('mithril');
var Fuzzy = require('../../models/Fuzzy.js');
var Company = require('../../models/AddCompany.js');


exports.controller = function () {
  var ctrl = this;
  ctrl.addCompany = Company.vm();

  ctrl.submit = function(e){
    e.preventDefault();
    Company.postCompany(ctrl.addCompany)
      .then(function(){
        ctrl.addCompany = Company.vm();
        ctrl.back()
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
    m('h4.center-align', 'Add a Company'),
    m('.row', [
      m('.input-field.col.s12.m4', [
        m('input[type=text]', {
          value: ctrl.addCompany.name(),
          onchange: m.withAttr('value', ctrl.addCompany.name)
        }),
        m('label', 'Company Name')
      ]),
      m('.input-field.col.s12.m4', [
        m('input#[type=text]', {
          value: ctrl.addCompany.url(),
          onchange: m.withAttr('value', ctrl.addCompany.url)}),
        m('label', 'URL')
      ]),
      m('.input-field.col.s12.m4', [
        m('input[type=text]', {
          value: ctrl.addCompany.address(),
          onchange: m.withAttr('value', ctrl.addCompany.address)
          }),
        m('label', 'Location')
      ]),
      m('.row.center-align', [
        m('button.btn.waves-effect.waves-light', 'Submit',  [
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};