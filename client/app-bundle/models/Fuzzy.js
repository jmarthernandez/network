var m = require('mithril');

var Fuzzy = module.exports = {

  //Get newQuery from table
  search: function(table , newQuery){
    return m.request({ method: 'GET', url: 'api/fuzzy/' + table + '/' + newQuery});
  }
};