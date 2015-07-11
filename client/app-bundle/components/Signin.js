// require('./ext/functions.js')
var m = require('mithril');
var materialize = require('../../lib/materialize.js');

exports.view = function (ctrl) {
  return m('div.slider.fullscreen', {config: materialize.fullScreenSlider}, [
    m('ul.slides', [
      m('li', [
        m('img[src="images/Image1.jpg"]'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
              m('.center-align', [
                m('a[href=/auth/makerpass/callback]', [
                m('button.btn.z-depth-2', 'Access your future.'),
                ])
              ]) 
          ])
      ]),
      m('li', [
        m('img[src="images/Image6.jpg"]'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
              m('.center-align', [
                m('a[href=/auth/makerpass/callback]', [
                m('button.btn.z-depth-2', 'Access your future.'),
                ])
              ]) 
          ])
      ]),
      m('li', [
        m('img[src="images/Image7.jpg"]'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
              m('.center-align', [
                m('a[href=/auth/makerpass/callback]', [
                m('button.btn.z-depth-2', 'Access your future.'),
                ])
              ]) 
          ])
      ]),
      m('li', [
        m('img[src="images/Image8.jpg"]'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
              m('.center-align', [
                m('a[href=/auth/makerpass/callback]', [
                m('button.btn.z-depth-2', 'Access your future.'),
                ])
              ]) 
          ])
      ]),
      m('li', [
        m('img[src="images/Image3.jpg"]'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
              m('.center-align', [
                m('a[href=/auth/makerpass/callback]', [
                m('button.btn.z-depth-2', 'Access your future.'),
                ])
              ]) 
          ])
      ]),
      m('li', [
        m('img[src="images/Image9.jpg"]'), 
          m('div.caption.center-align', [
            m('h1.center-align#shadow', 'Welcome to the Network'),
              m('.center-align', [
                m('a[href=/auth/makerpass/callback]', [
                m('button.btn.z-depth-2', 'Access your future.'),
                ])
              ]) 
          ])
      ])
    ]),    
  ]);
};
