var m             = require('mithril');
var materialize   = require('../../lib/materialize.js');

//Sub-Components
var Dropdown = require('./Dropdown.js')

exports.view = function(ctrl, options){
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
    ]), //Ends Row Under Head

    //Begin Active Applications (Phase 1)
    m('div#activeApps', [
      m('h5.center-align', 'Pending Applications'),
      m('ul.collapsible#shorten[data-collapsible=accordion]', [
        options.apps['1'].map(function(app){
          return m('li', [
            m('.collapsible-header', app.company_name + ': ' + app.title, 
              m('a', [
                m('i.mdi-action-view-headline.dropdown-button[href=#][data-activates=dropdown' + app.app_id + ']', {config: materialize.dropDowns})
              ])
            ),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]),  //End UL Collapsible
    ]), //End Active Applications (Phase I)

    //Begin Phone Interviews (Phase 2)
    m('div#events', [
      m('div#eventSmall.m4.s12', [
      m('h5.center-align', 'Phone Interviews'),
      m('ul.collapsible[data-collapsible=accordion]', [
        options.apps['2'].map(function(app){
          return m('li', [
            m('div.collapsible-header', { class: 'orange lighten-' + (5 -  app.count) }, [
              m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.company_name + ': ' + app.title),
              m('a', [
                m('i.mdi-action-view-headline.dropdown-button[href=#][data-activates=dropdown' + app.app_id + ']', {config: materialize.dropDowns})
              ]),
            ]),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]), //End UL Collapsible
      ]), //End #eventSmall
    //End Phone Interviews (Phase 2)

    //Begin Onsites (Phase 3)
    m('div#eventSmall.m4.s12', [
      m('h5.center-align', 'Challenges and Tech Interviews'),
      //m('h5.center-align', 'Coding Challenges/Tech Interviews: ' +  options.apps[3].length),
      m('ul.collapsible[data-collapsible=accordion]', [
        options.apps['3'].map(function(app){
          return m('li', [
            m('div.collapsible-header', { class: 'orange lighten-' + (5 -  app.count) }, [
              m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.company_name + ': ' + app.title),
              m('a', [
                m('i.mdi-action-view-headline.dropdown-button[href=#][data-activates=dropdown' + app.app_id + ']', {config: materialize.dropDowns})
              ]),
            ]),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]), //End UL Collapsible
    ]), //End #eventSmall
    //End Interviews (Phase 3)

    //Begin Onsites (Phase 4)
    m('div#eventSmall.m4.s12', [
      m('h5.center-align', 'Onsite Interviews'),
      m('ul.collapsible[data-collapsible=accordion]', [
        options.apps['4'].map(function(app){
          return m('li', [
            m('div.collapsible-header', { class: 'orange lighten-' + (5 -  app.count) }, [
              m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.company_name + ': ' + app.title),
              m('a', [
                m('i.mdi-action-view-headline.dropdown-button[href=#][data-activates=dropdown' + app.app_id + ']', {config: materialize.dropDowns})
              ]),
            ]),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]), //End UL Collapsible
      ]), //End #eventSmall
    ]), //End #Events Section
    //End Onsites (Phase 4)

    //Begin Offers (Phase 5)
    m('div#offers', [
      m('h5.center-align', 'Offers'),
      m('ul.collapsible[data-collapsible=accordion]', [
        options.apps['5'].map(function(app){
          return m('li', [
            m('div.collapsible-header', { class: 'orange lighten-' + (5 -  app.count) }, [
              m('a.app-link[href=/appdetail/' + app.app_id + ']', { config: m.route }, app.company_name + ': ' + app.title),
              m('a', [
                m('i.mdi-action-view-headline.dropdown-button[href=#][data-activates=dropdown' + app.app_id + ']', {config: materialize.dropDowns})
              ]),
            ]),
            m.component(Dropdown, {appId: app.app_id})
          ]) //End Return M LI
        })
      ]) //End UL Collapsible
    ])  //End Offers (Phase 5)
  ]); //Ends Return M.col.m9.s12
};