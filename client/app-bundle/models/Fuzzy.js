var m = require('mithril');


var Fuzzy = module.exports = {
    tempValue: null,

    vm: function (attrs) {
    attrs = attrs || '';

    return {
      search: m.prop(''),
    };
  },



   search: function(table,newQuery){
    return m.request({ method: 'GET', url: 'api/fuzzy/' + table + '/' + newQuery})
  }

};