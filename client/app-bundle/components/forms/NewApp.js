var m = require('mithril');
var NewApp = require('../../models/NewApp.js')
var materialize = require('../../../lib/materialize.js');
var Fuzzy = require('../Fuzzysearch.js')

exports.controller = function () {
  var ctrl = this;
  ctrl.newApp = NewApp.vm();

  ctrl.submit  = function (e) {
    console.log('hi')
    e.preventDefault();
    NewApp.postNewApplication(ctrl.newApp).then(function () {
      ctrl.newApp = NewApp.vm();
    });
  }
  ctrl.fetchInfo = NewApp.fetchInfo();
};

exports.view = function (ctrl) {

  var modelData = NewApp.all(); 

  return m('.row', [
    m('.row', [
      m('h3.center-align', 'Add Application')
    ]),
    m('form.col.s12', { onsubmit: ctrl.submit }, [
      m('.row', [
        m.component(Fuzzy, {
          search: 'companies',
          onSelect: function (company) {
            ctrl.newApp.company_id = company;
          },
          placeholder: 'Companies'
        }),
        m.component(Fuzzy, {
          search: 'titles',
          onSelect: function (title) {
            ctrl.newApp.title_id = title;
          },
          placeholder: 'Title'
        }),
           m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input.validate[type=text][placeholder=Application Method][name=app_method]', {
            value: ctrl.newApp.app_method(),
            onchange: m.withAttr('value', ctrl.newApp.app_method)
          }),
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common jobs
          m('input.[type=date][name=applied_on][placeholder="Applied On"]', {
            class: 'datepicker', 
            config: materialize.pickDates,
            value: ctrl.newApp.applied_on(),
            onchange: m.withAttr('value', ctrl.newApp.applied_on)
          },  console.log(JSON.stringify(ctrl.newApp))),
        ]),
      ]),
      m('.row.center-align', [
        m('button.btn.waves-effect.waves-light', 'Submit',  [
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};