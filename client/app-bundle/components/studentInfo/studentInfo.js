var m = require('mithril');

var materialize = require('../../../lib/materialize.js');


exports.view = function (ctrl, options) {
  return m('.col.m3.s12', [
       m('div.card.large.blue-grey.darken-1#jk', [
       m('card-content.white-text', [
        m('div.center-align', [
         m('img.responsive-img[src=' + options['studentInfo'].avatar_url +'].circle')
         ]),
         // m('img[src=' + app.avatar_url + '].circle'),
         m('div', ' Name: ' + options['studentInfo'].name),
         m('div', ' Active: ' + options['studentInfo'].active || 'Active'),
         m('div', ' School: ' + options['studentInfo'].school || 'School')    
       ]),//End Card Content
       m('div.center-align.card-reveal', [
       m('card-title', ['href=#'], 'test')
        ])
     ])
   ])
};

//ORIGINAL VIEW:
// exports.view = function (ctrl, options) {
//   return m('.col.m3.s12', [
//     m('.div.center-align', [
//       m('img.responsive-img[src=' + options['studentInfo'].avatar_url +']')
//     ]),
     //m('div', 'Name: ' + options['studentInfo'].name),
//     m('div', 'Email: ' + options['studentInfo'].email),
 //m('div', 'Status: ' + options['studentInfo'].status || 'Status'),
//     // m('div', 'Active: ' + options['studentInfo'].active || 'Active'),
//     // m('div', 'School: ' + options['studentInfo'].school || 'School'),
//     m('div', 'School: MakerSquare'),
//   ])
  
// };
//END ORIGINAL VIEW


//ORIGINAL MARKUP FROM MATERIALIZE
// <div class="row">
//         <div class="col s12 m6">
//           <div class="card blue-grey darken-1">
//             <div class="card-content white-text">
//               <span class="card-title">Card Title</span>
//               <p>I am a very simple card. I am good at containing small bits of information.
//               I am convenient because I require little markup to use effectively.</p>
//             </div>
//             <div class="card-action">
//               <a href="#">This is a link</a>
//               <a href="#">This is a link</a>
//             </div>
//           </div>
//         </div>
//       </div>