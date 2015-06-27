var m = require('mithril');

<<<<<<< HEAD
exports.view = function (ctrl, options) {
=======
var allApps = require('../../models/allApps.model.js')

exports.controller = function () {
  allApps.fetch()
}

exports.view = function (ctrl) {
  var apps = allApps.all()
>>>>>>> a067c47a57a28911465dc11672e6898ab407d06a

  return m('.col.m9.s12', [
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
<<<<<<< HEAD
      options['apps'][1].map(function(app){
        if(app.phase === '1'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('span.title', app.name),
=======
      apps[1].map(function(app){
        if(app.phase === '1'){   
          console.log(app)
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
>>>>>>> a067c47a57a28911465dc11672e6898ab407d06a
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase II'),
    m('ul.collection', [
<<<<<<< HEAD
      options['apps'][2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('span.title', app.name),
=======
      apps[2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
>>>>>>> a067c47a57a28911465dc11672e6898ab407d06a
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ]),
    m('h1.center-align', 'Phase III'),
    m('ul.collection', [
<<<<<<< HEAD
      options['apps'][3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('span.title', app.name),
=======
      apps[3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
>>>>>>> a067c47a57a28911465dc11672e6898ab407d06a
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name),
            // m('a.waves-effect.waves-light.secondary-content.btn[href=#]', 'update')
          ])
        }
      })
    ])
  ])
};