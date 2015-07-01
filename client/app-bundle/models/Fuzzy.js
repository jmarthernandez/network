var m = require('mithril');


var Fuzzy = module.exports = {
    tempValue: null,

   companySearch: function(newQuery){
    return m.request({ method: 'GET', url: 'api/fuzzy/companies/' + newQuery})
    // .then(function(info) {
    //   console.log(info.Companies, 'info')
    //   tempValue = info;
    // })
  },

  titleSearch: function(newQuery){
    m.request({ method: 'GET', url: 'api/fuzzy/titles/' + newQuery})
    .then(function(info) {
      return info;
    })
  },

  contactSearch: function(newQuery){
    m.request({ method: 'GET', url: 'api/fuzzy/contacts/' + newQuery})
    .then(function(info) {
      return info;
    })
  },

  userSearch: function(newQuery){
    m.request({ method: 'GET', url: 'api/fuzzy/users/' + newQuery})
    .then(function(info) {
      return info;
    })
  },

  questionSearch: function(newQuery){
    m.request({ method: 'GET', url: 'api/fuzzy/questions/' + newQuery})
    .then(function(info) {
      return info;
    })
  },

};