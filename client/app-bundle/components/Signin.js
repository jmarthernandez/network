// require('./ext/functions.js')
var m = require('mithril');
var materialize = require('../../lib/materialize.js');


exports.controller = function () {
  var ctrl = this;
};

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
        m('img[src="images/Image12.jpg"]'), 
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
        m('img[src="images/Image14.jpg"]'), 
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
    // m('head', [
    //   m('link[href=./style.css][rel=stylesheet]')
    // ]),
    // m('h1.center-align', 'Welcome to the Network'),
    // //m('p.center-align', 'Please sign in to access your future.'),
    // m('.center-align', [
    //   m('a[href=/auth/makerpass/callback]', [
    //     m('button.btn', 'Please sign in to access your future.')
    //   ])
    // ])  
  ]);
};



 // <div class="slider">
 //    <ul class="slides">
 //      <li>
 //        <img src="http://lorempixel.com/580/250/nature/1"> <!-- random image -->
 //        <div class="caption center-align">
 //          <h3>This is our big Tagline!</h3>
 //          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
 //        </div>
 //      </li>
 //      <li>
 //        <img src="http://lorempixel.com/580/250/nature/2"> <!-- random image -->
 //        <div class="caption left-align">
 //          <h3>Left Aligned Caption</h3>
 //          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
 //        </div>
 //      </li>
 //      <li>
 //        <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->
 //        <div class="caption right-align">
 //          <h3>Right Aligned Caption</h3>
 //          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
 //        </div>
 //      </li>
 //      <li>
 //        <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->
 //        <div class="caption center-align">
 //          <h3>This is our big Tagline!</h3>
 //          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
 //        </div>
 //      </li>
 //    </ul>
 //  </div>




// Original code:

// exports.view = function (ctrl) {
//   return m('div', [
//     m('head', [
//       m('link[href=./style.css][rel=stylesheet]')
//     ]),
//     m('h1.center-align', 'Welcome to the Network'),
//     m('p.center-align', 'Please sign in to access your future.'),
//     m('.center-align', [
//       m('a[href=/auth/makerpass/callback]', [
//         m('button.btn', 'Sign In')
//       ])
//     ])  
//   ]);
// };























