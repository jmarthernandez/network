var m = require('mithril');
var materialize = require('../../lib/materialize.js');

exports.view = function (ctrl, options) {
  if(options.apps){
    return m('.col.m9.s12', [
      // Start Phase I
      m('h5.center-align', 'Pending Applications: ' +  options.apps[1].length),
      m('ul.collection', [
        options.apps[1].map(function(app){
          //console.log(app);
          if(app.phase === '1'){  
            //var counter++;
            return m('li.collection-item avatar', [
              //m('div', app.phase),
              m('img[src=' + app.avatar_url + '].circle'),
              m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
              m('p', 'Title: ' + app.title),
              m('p', 'Company: ' + app.company_name)
              //m('div', options.apps[1].length) //Gives the number of apps per phase
            ])
          };
        })
      ]),
      // End Phase I

      // Start Phase II
      m('h5.center-align', 'Phone Interview Scheduled: ' +  options.apps[2].length),
      m('ul.collection', [
        options.apps[2].map(function(app){
          if(app.phase === '2'){   
            return m('li.collection-item avatar', [
              m('img[src=' + app.avatar_url + '].circle'),
              m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
              m('p', 'Title: ' + app.title),
              m('p', 'Company: ' + app.company_name)
            ])
          };
        })
      ]),
      // End Phase II

      // Start Phase III
      m('h5.center-align', 'Coding Challenges/Tech Interviews: ' +  options.apps[3].length),
      m('ul.collection', [
        options.apps[3].map(function(app){
          if(app.phase === '3'){   
            return m('li.collection-item avatar', [
              m('img[src=' + app.avatar_url + '].circle'),
              m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
              m('p', 'Title: ' + app.title),
              m('p', 'Company: ' + app.company_name)
            ])
          };
        })
      ]), //End Phrase III

      //Start Phase IV
      m('h5.center-align', 'Onsites: ' +  options.apps[4].length),
      m('ul.collection', [
        options.apps['4'].map(function(app){
          if(app.phase === '4'){ 
            return m('li.collection-item avatar', [
              m('img[src=' + app.avatar_url + '].circle'),
              m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
              m('p', 'Title: ' + app.title),
              m('p', 'Company: ' + app.company_name)
            ])
          };
        })
      ]),
      //End Phase IV

      //Start Phase V
      m('h5.center-align', 'Offers: ' +  options.apps[5].length),
      m('ul.collection', [
        options.apps['5'].map(function(app){
          if(app.phase === '5'){ 
            return m('li.collection-item avatar', [
              m('img[src=' + app.avatar_url + '].circle'),
              m('a.title', {href: '/profile/'+ app.uid, config: m.route} , app.name),
              m('p', 'Title: ' + app.title),
              m('p', 'Company: ' + app.company_name)
            ])
          };
        })
      ]),
      //End Phase V

    ]);
  }else{
    return m('h2.center-align', 'No active applications');
  }
};