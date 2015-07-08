// require('./ext/functions.js')
var m = require('mithril');
var materialize = require('../../lib/materialize.js');


exports.controller = function () {
  var ctrl = this;
};

exports.view = function (ctrl) {
  var links = [
    {title: 'Outcomes', url: '/outcomes'},
    {title: 'Students', url: '/profile'},
    {title: 'Sign Out', url: '/signout'}
  ];
  return m('nav.teal.darken-1', [
    m('.nav-wrapper', [
      m('a[href=/?/profile]#brand-logo', 'MKS-Network', [
        //m('a[href=#]', {'data-activates'="mobile-demo", config: materialize.navDrop}), 
        m('a[data-activates=mobile-demo][href=#].right', {class: 'button-collapse', config: materialize.navDrop}, [ 
          m('i.mdi-action-view-headline')]), 
        m('ul#nav-mobile.right.hide-on-med-and-down', [
          m('li', links.map(function(link) {
            return m('li',
              m('a', { href: link.url, config: m.route }, link.title) 
            )
          })),
        ]),
        m('ul#mobile-demo.side-nav', [
          // m('li', links.map(function(link) {
          //   return m('li',
          //     m('a', { href: link.url, config: m.route }, link.title)
          //   )
          // })), //Does not work in this format
          m('li', [
            m('a[href="/?/outcomes"]', "Outcomes"),
            m('a[href="/?/profile"]', "Profile"),
            m('a[href="/?/signout"]', "Sign Out"),
          ]), 
        ]),
      ])
    ])
  ]);
};