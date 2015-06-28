var m = require('mithril');

var Navbar = require('./components/Navbar.js');

exports.layout = function(viewContents) {
  return m('div', [
    m.component(Navbar),
    viewContents
  ]);
};
