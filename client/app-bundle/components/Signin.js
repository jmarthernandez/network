var m             = require('mithril');
var materialize   = require('../../lib/materialize.js');

exports.controller = function () {
  console.log(this)
  var ctrl = this;
  ctrl.images = [
  'images/Image1.jpg',
  'images/Image6.jpg',
  'images/Image7.jpg',
  'images/Image8.jpg',
  'images/Image9.jpg'
  ]
}

exports.view = function (ctrl, options) {
  return m('div.slider.fullscreen', {config: materialize.fullScreenSlider}, [
    m('ul.slides', 
      ctrl.images.map(function (path) {
        return m('li', [
          m('img[src=' + path + ']'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
            m('.center-align.login', [
              m('a[href=/auth/makerpass/callback]', [
              m('button.btn.z-depth-2', 'Login with MakerPass'),
              ])
            ]),
            m('.center-align.login', [
              m('a[href=/auth/google/callback]', [
              m('button.btn.z-depth-2', 'Login with Google'),
              ])
            ])
          ])
        ])
      })
    )
  ]);
};
