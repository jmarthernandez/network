var m = require('mithril');
var StudentApp =  require('./StudentApp.js')

//TODO: Comment and fix functionality
var Interview = module.exports = {

  vm: function (attrs) {
    attrs = attrs || '';

    return {
      app_id: m.prop(null),
      // user_id: m.prop(StudentApp.studentInfo.uid),
      type: m.prop('Coding Challenge'),
      contacts: m.prop(null),
      info: m.prop(null),
      scheduled_on: m.prop(null),
      occured_on: m.prop(null),
      follow_up: m.prop(null),
      quality: m.prop(null),
      preparedness: m.prop(null),
      info: {
        questions: m.prop(null),
      }
    };
  },

  //fetch info for update
  fetchInt: function (req) {
    return m.request({ methods: 'GET', url: '/API/interviews/' })
      .then(console.log('Interviews GET request'), req);
  },


  post: function (interview) {
    return m.request({ method: 'POST', url: '/API/interviews', data: interview })
      // .then(console.log('Interview POST'));
      // .then(undefined);
      .then(function (serverResponse) {
        console.log('Interview POST', serverResponse)
        return serverResponse
      })
  },
  
  all: function() {
    return Interview.vm();
  }

};