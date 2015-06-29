var m = require('mithril');

//TODO: Comment and make functional
var AllInts = module.exports = {

	contacts_id: '',

	fetchInt: function (req) {
		m.request({ methods: 'GET', url: '/API/interviews/' })
			.then(console.log('Interviews GET request'), req);
	},

	getInt: function () {
		m.request({ method: 'GET', url: '/API/interviews', data: ints })
	},
	all: function() {
		return AllInts.ints;
  }

};