var m               = require('mithril');

//Components
var Signin          = require('../components/Signin.js');

exports.view = function (ctrl) {
  return m('.container', [
      m.component(Signin)
  ])
}