var m = require('mithril');


var Fuzzy = module.exports = {
   search: function(table , newQuery){
    return m.request({ method: 'GET', url: 'api/fuzzy/' + table + '/' + newQuery})
  },
  post: function(table){
    return m.request({ method: 'GET', url: 'api/' + table})
  }
};