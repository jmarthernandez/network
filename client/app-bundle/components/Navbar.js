// require('./ext/functions.js')
var m = require('mithril');
var materialize = require('../../lib/materialize.js');

exports.view = function (ctrl, user) {
    var links = [
    {title: 'Outcomes', url: '/outcomes'},
    {title: 'Students', url: '/profile'},
    {title: 'Sign Out', url: '/signout'}
  ];
  return m('nav.teal.darken-1', [
    m('.nav-wrapper', [
        m('a[href="/?/profile"]', m('img.navPic[src=' + user.avatar_url +'].circle.left')),
        m('a.left#bnm', user.name), 
        m('a[data-activates=mobile-demo][href=#].right', {class: 'button-collapse', config: materialize.navDrop}, [ 
          m('div.i.mdi-action-view-headline#headlineLarger')]), 
        m('ul#nav-mobile.right.hide-on-med-and-down', [
          m('li', links.map(function(link) {
            return m('li',
              m('a', { href: link.url, config: m.route }, link.title) 
            )
          })),
        ]),
        m('ul#mobile-demo.side-nav', [  //Note: Does not work properly with link mapping (as above)
          m('li', [
            m('div.buffer'),
            m('a[href="/outcomes"]', { config: m.route }, [
              m('span.btn', "Outcomes")
            ]),
            m('a[href="/profile"]', { config: m.route }, [
              m('span.btn', "Profile")
            ]),
            m('a[href="/signout"]', { config: m.route }, [
              m('span.btn', "Sign Out")
            ])
          ]), 
        ]),
      ])
    ])
};