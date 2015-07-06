var m = require('mithril');
var materialize = require('../../lib/materialize.js');

//TODO: Add Update button that directs to a form
exports.view = function(ctrl, options){


  // exports.view = function (ctrl) {
  // return m('div', [
  //   m('head', [
  //     m('link[href=./style.css][rel=stylesheet]')
  //   ]),

 return m('.col.m12.s12', [
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
  ]), //Ends Row Just Under Return M

  //Begin Active Applications (Phase 1)
  m('div#activeApps', [
    m('h5.center-align', 'Pending Applications: ' +  options.apps[1].length),
    m('ul.collapsible#shorten[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['1'].map(function(app){
        return m('li', [
          m('div.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ']', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]), 
  ]), //End Active Applications (Phase I)

  //Begin Phone Interviews (Phase 2)
  m('div#events', [
    m('h5.center-align', 'Phone Interview Scheduled: ' +  options.apps[2].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['2'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ']', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
  ]), //End Phone Interviews (Phase 2)

  //Begin Onsites (Phase 3)
  m('div#events', [
    m('h5.center-align', 'Coding Challenges/Tech Interviews: ' +  options.apps[3].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['3'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ' ]', { config: m.route },'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
  ]), //End Interviews (Phase 3)

  //Begin Onsites (Phase 4)
  m('div#events', [
    m('h5.center-align', 'Onsites: ' +  options.apps[4].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['4'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ']', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
  ]), //End Onsites (Phase 4)

  //Begin Offers (Phase 5)
  m('div#offers', [
    m('h5.center-align', 'Offers: ' +  options.apps[5].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['5'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ']', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),//ends ul collaps
  ])  //End Offers (Phase 5)

  ]); //Ends Return M .col.m9.s12'
};