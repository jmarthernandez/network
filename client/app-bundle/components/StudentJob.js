var m = require('mithril');
var materialize = require('../../lib/materialize.js');

//TODO: List additional application info in drop down
//TODO: Add Update button that directs to a form
exports.view = function(ctrl, options){

 return m('.col.m9.s12', [
    //Start Phase I
    m('h5.center-align', 'Pending Applications: ' +  options.apps[1].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['1'].map(function(app){
        return m('li', [
          m('div.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge]', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/followup]', { config: m.route }, 'Follow Up'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview]', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen]', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen]', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]), 
    //End Phase I

    //Start Phase II
    m('h5.center-align', 'Phone Interview Scheduled: ' +  options.apps[2].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['2'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge]', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/followup]', { config: m.route }, 'Follow Up'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview]', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen]', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen]', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    //End Phase II

    //Start Phase III
    m('h5.center-align', 'Coding Challenges/Tech Interviews: ' +  options.apps[3].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['3'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge]', { config: m.route },'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/followup]', { config: m.route }, 'Follow Up'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview]', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen]', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen]', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    //End Phase III

    //Start Phase IV
    m('h5.center-align', 'Onsites: ' +  options.apps[4].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['4'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge]', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/followup]', { config: m.route }, 'Follow Up'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview]', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen]', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen]', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    //End Phase IV

    //Start Phase V
    m('h5.center-align', 'Offers: ' +  options.apps[5].length),
    m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
      options.apps['5'].map(function(app){
        return m('li', [
          m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
          m('.collapsible-body.center-align', [
            m('span', 'Active: ' + app.active),
            m("br"),
            m('a.waves-effect.waves-light.btn[href=/codingchallenge]', { config: m.route }, 'Coding Challenge'),
            m('a.waves-effect.waves-light.btn[href=/followup]', { config: m.route }, 'Follow Up'),
            m('a.waves-effect.waves-light.btn[href=/onsiteinterview]', { config: m.route }, 'Onsite Interview'),
            m('a.waves-effect.waves-light.btn[href=/phonescreen]', { config: m.route }, 'Phone Screen'),
            m('a.waves-effect.waves-light.btn[href=/technicalscreen]', { config: m.route }, 'Technical Screen')
          ])
        ])
      })
    ]),
    //End Phase V
  ]);
};
