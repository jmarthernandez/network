var m = require('mithril');
var Fuzzy = require('../Fuzzysearch.js')
var Title = require('../../models/AddTitle.js')


exports.controller = function () {
  var ctrl = this;
  ctrl.addTitle = Title.vm();


  ctrl.submit = function(e){
    e.preventDefault();
    Title.postTitle(ctrl.addTitle)
      .then(function(){
        ctrl.addTitle = Title.vm();
      })
  }
};



exports.view = function (ctrl) {

  return m('form.col.s12' , { onsubmit: ctrl.submit }, [
    m('h4.center-align', 'Add a Title'),
    m('.row', [
      m('.input-field.col.s12.m4', [
        m('input[type=text]', {
          value: ctrl.addTitle.name(),
          onchange: m.withAttr('value', ctrl.addTitle.name)
        }),
        m('label', 'Contact Name')
      ]),
      m('.input-field.col.s12.m4', [
        m('input#[type=text]', {
        value: ctrl.addTitle.phone_number(),
        onchange: m.withAttr('value', ctrl.addTitle.phone_number)}),
      m('label', 'Phone Number')]),
      m.component(Fuzzy, {
        search: 'companies',
        onSelect: function (company) {
          ctrl.addTitle.company_id = company;
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