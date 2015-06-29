var m = require('mithril');

//TODO: Comment and fix functionality
var Interview = module.exports = {

	vm: function (attrs) {
		attrs = attrs || '';

		return {
			// id: attrs.id,
			contacts_id: m.prop(''),
			role: m.prop(''),
			scheduled_date: m.prop(''),
			occured_date: m.prop(''),
			follow_up: m.prop(''),
			quality: m.prop(''),
			preparedness: m.prop('')
			// scheduled_date: m.prop(attrs.scheduled_date || new Date()),
			// quality: m.prop(attrs.quality || 3)
		};
	},

	fetchInt: function (req) {
		m.request({ methods: 'GET', url: '/API/interviews/' })
			.then(console.log('Interviews GET request'), req);
	},

	postInterview: function () {
		m.request({ method: 'POST', url: '/API/interviews', data:Interview.vm() })
			.then(console.log('Interview POST'));
	},
	
	all: function() {
		return Interview.vm();
  }

};