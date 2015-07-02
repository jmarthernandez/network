var m = require('mithril');
var NewApp = require('../../models/NewApp.js')

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
        m('.input-field.col.s12.m6',[
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder=company]', {
            value: ctrl.newApp.company_id(),
            onchange: m.withAttr('value', ctrl.newApp.company_id)
          }),
          m('label', 'company')
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common companies
          m('input#first_name.validate[type=text][placeholder=title][name=title_id]', {
            value: ctrl.newApp.title_id(),
            onchange: m.withAttr('value', ctrl.newApp.title_id)
          }),
          m('label', 'title')
        ]),
           m('.input-field.col.s12.m6', [
          //Should have a limit of text
          m('input#first_name.validate[type=text][placeholder=application method][name=app_method]', {
            value: ctrl.newApp.app_method(),
            onchange: m.withAttr('value', ctrl.newApp.app_method)
          }),
          m('label', 'application method')
        ]),
        m('.input-field.col.s12.m6', [
          //Should auto complete for common jobs
          m('input#first_name.datepicker[type=date][placeholder=""][name=applied_on]', {
            value: ctrl.newApp.applied_on(),
            onchange: m.withAttr('value', ctrl.newApp.applied_on)
          },  console.log(JSON.stringify(ctrl.newApp))),
          m('label', '')
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