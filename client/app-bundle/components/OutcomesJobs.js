var m             = require('mithril');
var materialize   = require('../../lib/materialize.js');
var User          = require('../models/User.js')
var App          = require('../models/App.js')


//Sub-Components
var Fuzzy         = require('./Fuzzysearch.js')
var Dropdown      = require('./Dropdown.js')

exports.controller = function () {
  var ctrl = this;
  ctrl.fuzz = null;


  ctrl.reset = function(){
    ctrl.fuzz = {apps: App.all()};
  }
};

exports.view = function(ctrl, options) {
  var fuzzyName = ctrl.fuzz || options;
  return m('.col.m12.s12', [
    m('head', [
      m('link[href=index.css][rel=stylesheet]')
    ]),
    m('.row', [
      m('div.col.s12', [
        m('ul', {class: 'tabs', config: materialize.tabInit}, [
          m('li.tab.col.s4', [
            m('a[href="#activeApps"]', "Applications"), 
          ]),
          m('li.tab.col.s4', [
            m('a[href="#events"]', "Events"), 
          ]),
          m('li.tab.col.s4', [
            m('a[href="#offers"]', "Offers"), 
          ]),
        ]), //End Tabs UL
      ]), //End Div.Col.S12 
    ]), //Ends Row Just Under Head

    //Begin Active Applications (Phase 1)
    m('div#activeApps', [
      m('h5.center-align', 'Pending Applications'),
      m('ul.collapsible#shorten[data-collapsible=accordion]', [
        fuzzyName.apps['1'].map(function(app){
          return m('li', [
              m('a', [
                m('img[src=' + app.avatar_url + '].circle.app.dropdown-button[href=#][data-activates=dropdown' + app.app_id + '].left', {config: materialize.dropDowns})
              ]),
            m('div.collapsible-header', app.name + ' ' + app.company_name + ': ' + app.title, [
            ]),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]), //End UL Collapsible
    ]), //End Active Applications (Phase I)

    //Begin Phone Interviews (Phase 2)
    m('div#events', [
      m('div#eventSmall.m4.s12', [
        m('h5.center-align', 'Phone Interviews'),
        m('ul.collapsible[data-collapsible=accordion]', [
          fuzzyName.apps['2'].map(function(app){
            return m('li', [
              m('div.collapsible-header', { class: 'amber lighten-' + (5 -  app.count) }, [
                m('a', [
                  m('img[src=' + app.avatar_url + '].circle.app.dropdown-button[href=#][data-activates=dropdown' + app.app_id + '].left', {config: materialize.dropDowns})
                ]),
                m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.name + ' ' + app.company_name + ': ' + app.title)
              ]),
              m.component(Dropdown, {appId: app.app_id})
            ]) //End Return M LI
          })
        ]) //End UL Collapsible
      ]), //End #eventSmall
    //End Phone Interviews (Phase 2)

    //Begin Onsites (Phase 3)
      m('div#eventSmall.m4.s12', [
        m('h5.center-align', 'Challenges and Tech Interviews'),
        m('ul.collapsible[data-collapsible=accordion]', [
          fuzzyName.apps['3'].map(function(app){
            return m('li', [
              m('div.collapsible-header', { class: 'amber lighten-' + (5 -  app.count) }, [
                m('a', [
                  m('img[src=' + app.avatar_url + '].circle.app.dropdown-button[href=#][data-activates=dropdown' + app.app_id + '].left', {config: materialize.dropDowns})
                ]),
                m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.name + ' ' + app.company_name + ': ' + app.title)
              ]),
              m.component(Dropdown, {appId: app.app_id})
            ]) //End Return M LI
          })
        ]) //End UL Collapsible
      ]), //End #eventSmall
    //End Interviews (Phase 3)

    //Begin Onsites (Phase 4)
      m('div#eventSmall.m4.s12', [
        m('h5.center-align', 'Onsite Interviews'),
        m('ul.collapsible[data-collapsible=accordion]', [
          fuzzyName.apps['4'].map(function(app){
            return m('li', [
              m('div.collapsible-header', { class: 'amber lighten-' + (5 -  app.count) }, [
                m('a', [
                  m('img[src=' + app.avatar_url + '].circle.app.dropdown-button[href=#][data-activates=dropdown' + app.app_id + '].left', {config: materialize.dropDowns})
                ]),
                m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.name + ' ' + app.company_name + ': ' + app.title)
              ]),
              m.component(Dropdown, {appId: app.app_id})
            ]) //End Return M LI
          })
        ]), //End UL Collapsible
      ]) //End #eventSmall
    ]), //End Onsites (Phase 4)  //End#Events

    //Begin Offers (Phase 5)
    m('div#offers', [
      m('h5.center-align', 'Offers'),
      m('ul.collapsible[data-collapsible=accordion]', [
        fuzzyName.apps['5'].map(function(app){
          return m('li', [
            m('div.collapsible-header', { class: 'amber lighten-' + (5 -  app.count) }, [
              m('a', [
                m('img[src=' + app.avatar_url + '].circle.app.dropdown-button[href=#][data-activates=dropdown' + app.app_id + '].left', {config: materialize.dropDowns})
              ]),
              m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.name + ' ' + app.company_name + ': ' + app.title)
            ]),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]) //End UL Collapsible
    ]),
    //End Offers (Phase 5)

    m.component(Fuzzy, {
      search: 'users',
      onSelect: function (users) {
        ctrl.fuzz = User.arrange(users,function(x){ ctrl.fuzz = x});
      },
      placeholder: 'Alumni',
      optionView: function (student) {
        return student.name; 
      },
      route: m('a.waves-effect.waves-light.btn', 'Lookup Student')
    }),
    m('button.btn',{onclick: ctrl.reset},'Show All'),
  ]); //Ends Return M.col.m9.s12
};