var m = require('mithril');

var AddQuestions = module.exports = {

  //View-model for add question form
  vm: function (attrs) {
    attrs = attrs || '';
    return {
      name: m.prop(''),
      interview_id: m.prop(1)
    };
  },

  //Post question to database if doesn't exist already
  postQuestions: function(data){
    return m.request({ method: 'POST', url: 'api/questions', data: data });
  },

  // Makes AddQuestions.vm() accessible to the view
  all: function() {
    return AddQuestions.vm();
  }
};