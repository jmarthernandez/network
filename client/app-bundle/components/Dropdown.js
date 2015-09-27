var m             = require('mithril');

exports.view = function(ctrl, options){
  return m('ul#dropdown' + options.appId, {class:'dropdown-content'}, [
    m('li', [
      m('a[href=/phonescreen/' + options.appId + ']', { config: m.route }, 'Phone Screen')
    ]),
    m('li', [
      m('a[href=/technicalscreen/' + options.appId + ']', { config: m.route }, 'Technical Screen')
    ]),
    m('li', [
      m('a[href=/codingchallenge/' + options.appId + ']', { config: m.route }, 'Coding Challenge')
    ]),
    m('li', [
      m('a[href=/onsiteinterview/' + options.appId + ']', { config: m.route }, 'Onsite Interview')
    ])
  ])
};