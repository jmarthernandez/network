var m = require('mithril');
var materialize = require('../../lib/materialize.js');

exports.view = function (ctrl, options) {

  return m('.col.m9.s12', [
    // Start Phase I
    m('h1.center-align', 'Phase I'),
    m('ul.collection', [
      options.apps[1].map(function(app){
        if(app.phase === '1'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name)
          ])
        };
      })
    ]),
    // End Phase I

    // Start Phase II
    m('h1.center-align', 'Phase II'),
    m('ul.collection', [
      options.apps[2].map(function(app){
        if(app.phase === '2'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name)
          ])
        };
      })
    ]),
    // End Phase II

    // Start Phase II
    m('h1.center-align', 'Phase III'),
    m('ul.collection', [
      options.apps[3].map(function(app){
        if(app.phase === '3'){   
          return m('li.collection-item avatar', [
            m('img[src=' + app.avatar_url + '].circle'),
            m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
            m('p', 'Title: ' + app.title),
            m('p', 'Company: ' + app.company_name)
          ])
        };
      })
    ])
  ]);
};