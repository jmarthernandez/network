var m = require('mithril');
var materialize = require('../../lib/materialize.js')

var AllApps = require('../models/AllApps.model.js')

exports.controller = function () {
  AllApps.fetch()
}

exports.view = function (ctrl) {
 var apps = AllApps.all()
  return m('.col.m9.s12', [
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
      apps[1].map(function(app){
        if(app.phase === '1'){   
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
  ])
};