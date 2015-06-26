var m = require('mithril');

var allInts = module.exports = {

	var ints = {};

	fetchInt: function () {
		m.request({
			methods: 'POST',
			url: '/API/interviews/'

		}).then(console.log('Interviews post request'));
	},

	getInt: function () {
		m.request({
			method: 'GET',
			url: '/API/interviews',
			data: ints,
		})
	},

	





};