var m = require('mithril');
var materialize = require('../../lib/materialize.js');

//TODO: List additional application info in drop down
//TODO: Add Update button that directs to a form
exports.view = function(ctrl, options){
    console.log(options.apps, 'thiss')
  if(options.apps){
   return m('.col.m9.s12', [
      //Start Phase I
      m('h5.center-align', 'Pending Applications'),
      m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
        options.apps['1'].map(function(app){
          return m('li', [
            m('div.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.applied_on.slice(0,10)),
            m('.collapsible-body', [ 
              m('div', 'More information can be inserted here'),
              m('span', 'Active: ' + app.active),
              m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
              ])
          ])
        })
      ]), 
      //End Phase I

      //Start Phase II
      m('h5.center-align', 'Phone Interview Scheduled'),
      m('ul.collapsible[data-collapsible=accordion]', { config: materialize.makeCollapsible}, [
        options.apps['2'].map(function(app){
          return m('li', [
            m('.collapsible-header', 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.date_applied.slice(0,10)),
            m('.collapsible-body', [
              m('div', 'More information can be inserted here'),
              m('span', 'Active: ' + app.active),
              m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
            ])
          ])
        })
      ])
      //End Phase II
    ]);
  }else{
    return m('h2', 'Submit your first application!');
  }
};
