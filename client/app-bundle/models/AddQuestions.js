var m = require('mithril');

var AddQuestions = module.exports = {

  
  usersArray: null,
  me: null,

  //View-model for messages form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      name: m.prop(''),
      interview_id: m.prop(1)
    }
  },

  postQuestions: function(data){
      console.log(data, " I AM OVER HERE!")
    return m.request({ method: 'POST', url: 'api/questions', data: data })
  },
  // Makes messages accessible to the view
  all: function() {
    return AddQuestions.vm();
  }
};