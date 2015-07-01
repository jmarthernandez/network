var m                 = require('mithril');
var AutocompleteInput = require('../components/Fuzzysearch.js');

exports.view = function (ctrl) {
	// dog.subscribe()

  return m.component(AutocompleteInput, {
	searchUrl: '/companies',
	showAttr: 'name',
	onSelect: function (company) {},
})
  
};