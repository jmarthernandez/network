var m = require('mithril');
var materialize = require('../../../lib/materialize.js');

// exports.view = function (ctrl, options) {
//   return m('.col.m9.s12', [
//     m('h1.center-align', 'Pending Applications'),
//     m('ul.collection[data-collapsible="accordion"]', {class: "collapsible", config: materialize.makeCollapsible}, [
//       options['apps'].map(function(app){
//         return m('li.collection-item avatar', {class: 'collapsible-header'} [
//           m('div', {class: 'collapsible-body'}, [
//           // m('img[src=' + options['studentInfo'].avatar_url + '].circle'),
//           // m('span.title', app.company_name),
//           // m('p', 'Title: ' + app.title),
//           // m('p', 'Date Applied: ' + app.date_applied.slice(0,10)),
//             ])
//           // m('p', 'Active: ' + app.active),
//           // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
//         ])
//       })
//     ])
//   ])
// };


////ORIGINAL VIEW
// exports.view = function (ctrl, options) {
//   return m('.col.m9.s12', [
//     m('h1.center-align', 'Pending Applications'),
//     m('ul.collection[data-collapsible="accordion"]', {class: "collapsible"}, [
//       options['apps'].map(function(app){
//         return m('li.collection-item avatar', {class: 'collapsible-header'}, [
//           m('img[src=' + options['studentInfo'].avatar_url + '].circle'),
//           m('span.title', app.company_name),
//           m('p', 'Title: ' + app.title),
//           m('p', 'Date Applied: ' + app.date_applied.slice(0,10)),
//           // m('p', 'Active: ' + app.active),
//           // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
//         ])
//       })
//     ])
//   ])
// };
//END ORIGINAL VIEW


exports.view = function(ctrl, options){

  console.log(options.apps + "options are here");

   return m('.col.m9.s12', [

      m('h5.center-align', 'Pending Applications'),
      m('ul[data-collapsible="accordion"]', {class: "collapsible", config: materialize.makeCollapsible}, [
        options['apps']['1'].map(function(app){
          return m('li', [ //Return1
            m('div[style="font-weight:bold"]', {class: 'collapsible-header'}, 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.date_applied.slice(0,10)),
            m('div', {class: 'collapsible-body'}, [ //Div1
              // m('span.title', app.company_name),
              m('div', "More information can be inserted here"),
              // m("button", ["Send", m("br"), "Now"]),
              m('span', 'Active: ' + app.active),
              m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
            ])//End Div1
          ])//End Return1
        })
      ]), //End UL Data Collapsible1

      m('h5.center-align', 'Phone Interview Scheduled'),
       m('ul[data-collapsible="accordion"]', {class: "collapsible", config: materialize.makeCollapsible}, [
        options['apps']['2'].map(function(app){
          return m('li', [ //Return2
            m('div', {class: 'collapsible-header'}, 'Company: ' + app.company_name + ' Title: ' + app.title + ' Date Applied: ' + app.date_applied.slice(0,10)),
            m('div', {class: 'collapsible-body'}, [ //Div1
              // m('span.title', app.company_name),
              m('div', "More information can be inserted here"),
              m('span', 'Active: ' + app.active),
              m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
            ])//End Div2
          ])//End Return2
        })
      ]) //End UL Data Collapsible2
    ])
};


//We want each application to only list the Company and Date, when you click on it, it drops down additional information
//as well as an update button to point to a form 