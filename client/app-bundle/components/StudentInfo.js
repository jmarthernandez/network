var m = require('mithril');

var materialize = require('../../lib/materialize.js');

//Student info in sidebar 
exports.view = function (ctrl, options) {
  return m('.col.m3.s12', [
    m('div.card.large.teal.darken-1#jk', [ 
      m('card-content.white-text', [
        m('div.center-align', [
          m('img.responsive-img[src=' + options.studentInfo.avatar_url +']')
        ]),
        m('div', ' Name: ' + options.studentInfo.name),
        m('div', ' Active: ' + options.studentInfo.active || 'Active'),
        m('div', ' School: ' + options.studentInfo.school || 'School')    
      ])
    ])
  ]);
};