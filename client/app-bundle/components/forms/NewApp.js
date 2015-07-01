var m = require('mithril');
var NewApp = require('../../models/NewApp.js')

exports.controller = function () {
  var ctrl = this;
  ctrl.newApp = NewApp.vm();

  ctrl.submit  = function (e) {
    console.log('hi')
    e.preventDefault();
    NewApp.postNewApplication(ctrl.newApp);
  }

  // ctrl.fetchInfo = NewApp.fetchInfo();
  // m.request({
  //   method: 'GET',
  //   url: '/me/'
  // }).then(function(req){
  //   ctrl.newAppForm = m.prop(newAppForm);
  //   ctrl.newAppForm().user_id = req.user.uid 
  //   console.log(ctrl.newAppForm(), 'newAppForm');
  // });

  // ctrl.postApp = function(e, data) {
  //   e.preventDefault()

  //   m.request({
  //       method: 'POST',
  //       url: '/API/applications/',
  //       data: ctrl.newAppForm,
  //       }).then(function(data) {
  //         console.log(data, 'postApp');
  //         // m.redraw.strategy('all')
  //       })
  // };

  // ctrl.getCompany = function(e, data) {
  //   e.preventDefault()
  //   m.request({
  //     method: 'GET',
  //     url: '/API/companies/',
  //   }).then(function(companies){
  //     console.log(companies)
  //   });
  // };

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
          m('input#first_name.validate[type=text][placeholder=company][name=company_id]', {
            value: ctrl.newApp.company_id(),
            onchange: m.withAttr('value', ctrl.newApp.company_id)
          }),
          m('label', 'company')
        ]),
      // m('.input-field.col.s12.m6', [
      //     //Should auto complete for common jobs
      //     m('input#first_name.validate[type=text][placeholder=active][name=active]', {value: ctrl.newAppForm().active}, console.log(ctrl.newAppForm())),
      //     m('label', 'active')
      //   ]),
        // m('.input-field.col.s12.m6', [
        //   //Should have a limit of text
        //   m('input#first_name.validate[type=text][placeholder=phase][name=phase]', {value: ctrl.newAppForm().phase}),
        //   m('label', 'phase')
        // ]),
     
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
        // m('.input-field.col.s12.m6', [
        //   //Should auto complete for common jobs
        //   m('input#first_name.validate[type=text][placeholder="contact"][name=contact_id]', {value: ctrl.newAppForm().contact_id}),
        //   m('label', "contact")
        // ]),
      ]),
      m('.row.center-align', [
        // m('button.btn.waves-effect.waves-light[type=button]', 'Submit', {onclick: function() {postApp}},
        m('button.btn.waves-effect.waves-light', 'Submit',  [
          //POST to database
          m('i.mdi-content-send.right')
        ])
      ])
    ])
  ]);
};