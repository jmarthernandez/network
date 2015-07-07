var m = require('mithril');
var Fuzzy = require('../Fuzzysearch.js')
var Contacts = require('../../models/AddContacts.js')


exports.controller = function () {
  var ctrl = this;
  ctrl.addContacts = Contacts.vm();


  ctrl.submit = function(e){
    e.preventDefault();
    Contacts.postContacts(ctrl.addContacts)
      .then(function(){
        ctrl.addContacts = Contacts.vm();
      })
  }
};



exports.view = function (ctrl) {

  return m('form.col.s12' , { onsubmit: ctrl.submit }, [
    m('.row', [
      m('a.btn[href=/profile]', { config: m.route }, 'Back to profile')
    ]),
    m('h4.center-align', 'Add a Contact'),
    m('.row', [
      m('.input-field.col.s12.m4', [
        m('input[type=text]', {
          value: ctrl.addContacts.name(),
          onchange: m.withAttr('value', ctrl.addContacts.name)
        }),
        m('label', 'Contact Name')
      ]),
      m('.input-field.col.s12.m4', [
        m('input#[type=text]', {
        value: ctrl.addContacts.phone_number(),
        onchange: m.withAttr('value', ctrl.addContacts.phone_number)}),
      m('label', 'Phone Number')]),
      m.component(Fuzzy, {
        search: 'companies',
        onSelect: function (company) {
          ctrl.addContacts.company_id = company;
        },
        placeholder: 'Companies',
        optionView: function (company) {
          return company.name + "  -  " + company.address + "  -  " + company.url
        }
      })
    ]),
    m('.row.center-align', [
      m('button.btn.waves-effect.waves-light', 'Submit',  [
        m('i.mdi-content-send.right')
      ])
    ])
  ])
};