var m = require('mithril');


var Fuzzy = module.exports = {




  var CompanySearch = function(newQuery){
    m.request({ method: 'GET', url: 'api/fuzzy/companies/' + newQuery})
    .then(function(userInfo) {
      return userInfo;
    })
  },

};