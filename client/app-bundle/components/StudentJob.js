var m = require('mithril');
var materialize = require('../../lib/materialize.js');

//TODO: Add Update button that directs to a form
exports.view = function(ctrl, options){

 return m('.col.m12.s12', [
  m('head', [
    m('link[href=../../public/index.css][rel=stylesheet]')
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
  ]), //Ends Row Just Under Return M

  //Begin Active Applications (Phase 1)
  m('div#activeApps', [
    m('h5.center-align', 'Pending Applications'),
    m('ul.collapsible#shorten[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['1'].map(function(app){
        return m('li', [
          m('div.collapsible-header', app.company_name + ': ' + app.title),
          m('.collapsible-body.center-align', [
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
    m('div#testSmall.m4.s12', [
    m('h5.center-align', 'Phone Interviews'),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['2'].map(function(app){
        return m('li', [
          m('.collapsible-header', {class: 'green lighten-' + (5 -  app.count) }, app.company_name + ': ' + app.title),
          m('.collapsible-body.center-align', [
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ']', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    ]),  //End #testSmall
  //]), //End Phone Interviews (Phase 2)

  //Begin Onsites (Phase 3)
  //m('div#gg', [
    m('div#testSmall.m4.s12', [
    m('h5.center-align', 'Challenges and Tech Interviews'),
    //m('h5.center-align', 'Coding Challenges/Tech Interviews: ' +  options.apps[3].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['3'].map(function(app){
        return m('li', [
          m('.collapsible-header', {class: 'green lighten-' + (5 -  app.count) }, app.company_name + ': ' + app.title),
          m('.collapsible-body.center-align', [
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ' ]', { config: m.route },'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    ]),  //End #testSmall
  //]), //End Interviews (Phase 3)

  //Begin Onsites (Phase 4)
  //m('div#ggg', [
    m('div#testSmall.m4.s12', [
    m('h5.center-align', 'Onsite Interviews'),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['4'].map(function(app){
        return m('li', [
          m('.collapsible-header', {class: 'green lighten-' + (5 -  app.count) }, app.company_name + ': ' + app.title),
          m('.collapsible-body.center-align', [
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge/' + app.app_id + ']', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview/' + app.app_id + ']', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen/' + app.app_id + ']', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen/' + app.app_id + ']', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    ]),  //End #testSmall
  ]), //End Onsites (Phase 4)  //End#Events

  //Begin Offers (Phase 5)
  m('div#offers', [
    m('h5.center-align', 'Offers'),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['5'].map(function(app){
        return m('li', [
          m('.collapsible-header', {class: 'green lighten-' + (5 -  app.count) }, app.company_name + ': ' + app.title),
          m('.collapsible-body.center-align', [
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