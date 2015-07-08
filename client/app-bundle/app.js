var m = require('mithril');

// Components
var Navbar = require('./components/Navbar.js');

// Wraps view contents in Navbar
exports.layout = function(viewContents, user) {
  return m('div', [
    m.component(Navbar, user),
    viewContents
  ]);
};
