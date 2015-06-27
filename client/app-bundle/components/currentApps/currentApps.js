var m = require('mithril');
var materialize = require('../../../lib/materialize.js')

var allApps = require('../../models/allApps.model.js')

exports.controller = function () {
  allApps.fetch()
}

exports.view = function (ctrl) {
 var apps = allApps.all()
  return m('.col.m9.s12', [
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
      apps[1].map(function(app){
        if(app.phase === '1'){   
          console.log(app)
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),//End UL Collection App[1]
    m('h1.center-align', 'Phase II'),
    m('ul.collection', [
      apps[2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase III'),
    m('ul.collection', [
      apps[3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ])
  ]) //End of Return
};












//HOLDING PATTERN
 // return m('ul[data-collapsible="accordion"]', {class: "collapsible", config: materialize.makeCollapsible}, [
 //    m('li', [
 //      m('div', {class: 'collapsible-header'}, "In-Person Interviews"),
 //      m('div', {class: 'collapsible-body'}, "List Students"),
 //    ]),
 //    m('li', [
 //      m('div', {class: 'collapsible-header'}, "Phone Interviews"),
 //      m('div', {class: 'collapsible-body'}, "List Students"),
 //    ]),
 //    m('li', [
 //      m('div', {class: 'collapsible-header'}, "Follow Ups"),
 //      m('div', {class: 'collapsible-body'}, "List Students"),
 //    ]),
 //        m('li', [
 //      m('div', {class: 'collapsible-header'}, "Element 4"),
 //      m('div', {class: 'collapsible-body'}, "List Students"),
 //    ])
 //  ])