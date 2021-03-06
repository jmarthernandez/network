var m = require('mithril');

//Models
var Interview = require('../models/Interview.js');

exports.view = function (ctrl, options) {

  var opt =  options[1][0]||
             options[2][0]|| 
             options[3][0]|| 
             options[4][0];

  var name = opt.company_name || 'Company Name';

  return m('.container' , [
    m('.row', [
      m('a.btn', { onclick: Interview.back}, 'Back')
    ]),
    m('h1.center-align', name),
    m('h2.app-detail-heading', 'Phone Screen'),
    options[1].length === 0 ? m('div', 'No phone screens scheduled') :
    options[1].map(function (phoneScreen) {
      return m('div', [
        m('p', 'Scheduled On: ' + phoneScreen.scheduled_on.slice(0,10)),
        m('hr')
      ])
    }),
    m('h2.app-detail-heading', 'Onsite Interview'),
    options[2].length === 0 ? m('div', 'No onsite interviews scheduled') :
    options[2].map(function (onsite) {
      return m('div', [
        m('p', 'Scheduled: ' + onsite.scheduled_on.slice(0,10)),
        m('hr')
      ])
    }),
    m('h2.app-detail-heading', 'Coding Challenge'),
    options[3].length === 0 ? m('div', 'No coding challenges scheduled') :
    options[3].map(function (codingChallenge) {
      return m('div', [
        m('p', 'Coding Prompt: ' + codingChallenge.info.questions),
        m('p', 'Scheduled: ' + codingChallenge.scheduled_on.slice(0,10)),
        m('hr')
      ])
    }),
    m('h2.app-detail-heading', 'Technical Interview'),
    options[4].length === 0 ? m('div', 'No technical interviews scheduled') :
    options[4].map(function (technicalInterview) {
      return m('div', [
        m('p', 'Scheduled: ' + technicalInterview.scheduled_on.slice(0,10)),
        m('hr')
      ])
    }),
  ])
};
