var m                 = require('mithril');
var AutocompleteInput = require('../components/Fuzzysearch.js');

exports.view = function (ctrl) {

  return m.component(AutocompleteInput, {
	searchUrl: '/companies',
	search: 'companies',
	onSelect: function (company) {},
	})
};