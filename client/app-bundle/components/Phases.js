var m = require('mithril');

exports.controller = function () {
  var ctrl = this;
};

exports.view = function (ctrl) {
  return m('ul.collapsible[data-collapsible=accordion]', [
    m('li', [
      m('.collapsible-header', 'In-Person Interviews'),
      m('.collapsible-body', 'List Students'),
    ]),
    m('li', [
      m('.collapsible-header', 'Phone Interviews'),
      m('.collapsible-body', 'List Students'),
    ]),
    m('li', [
      m('.collapsible-header', 'Follow Ups'),
      m('.collapsible-body', 'List Students'),
    ]),
    m('li', [
      m('.collapsible-header', 'Element 4'),
      m('.collapsible-body', 'List Students'),
    ])
  ]);
};
