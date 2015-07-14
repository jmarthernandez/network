var m             = require('mithril');
var Fuzzy         = require('../Fuzzysearch.js');
var Contacts      = require('../../models/AddContacts.js');

exports.controller = function () {
  var ctrl = this;
  ctrl.addContacts = Contacts.vm();

  ctrl.submit = function(e){
    e.preventDefault();
    Contacts.postContacts(ctrl.addContacts)
      .then(function(){
        ctrl.addContacts = Contacts.vm();
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
    m('h4.center-align', 'Add a Contact'),
    m('.row', [
      m('.input-field.col.s12.m4', [
        m('input[type=text][placeholder="Contact Name"]', {
          value: ctrl.addContacts.name(),
          onchange: m.withAttr('value', ctrl.addContacts.name)
        }),
      ]),
      m('.input-field.col.s12.m4', [
        m('input#[type=text][placeholder="Phone Number"]', {
        value: ctrl.addContacts.phone_number(),
        onchange: m.withAttr('value', ctrl.addContacts.phone_number)}),
      ]),
      m.component(Fuzzy, {
        search: 'companies',
        onSelect: function (company) {
          ctrl.addContacts.company_id = company;
        },
        placeholder: 'Companies',
        optionView: function (company) {
          return company.name + "  -  " + company.address + "  -  " + company.url
        },
        route: m('a.waves-effect.waves-light.btn[href=/company/]', { config: m.route }, 'Add a Company')

      })
    ]),
    m('.row.center-align', [
      m('button.btn.waves-effect.waves-light', 'Submit',  [
        m('i.mdi-content-send.right')
      ])
    ])
  ]);
};