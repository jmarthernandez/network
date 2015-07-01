var m = require('mithril');
var StudentApp =  require('./StudentApp.js')

//TODO: Comment and fix functionality
var Interview = module.exports = {

	vm: function (attrs) {
		attrs = attrs || '';

		return {
			// id: attrs.id,
			user_id: m.prop(StudentApp.studentInfo.uid),
			type: m.prop(''),
			contacts_id: m.prop(null),
			role: m.prop(''),
			scheduled_date: m.prop(''),
			occured_date: m.prop(''),
			follow_up:m.prop(''),
			quality: m.prop(''),
			questions: m.prop(''),
			preparedness: m.prop(null),
		};
	},

	fetchInt: function (req) {
		return m.request({ methods: 'GET', url: '/API/interviews/' })
			.then(console.log('Interviews GET request'), req);
	},

	postInterview: function (interview) {
		return m.request({ method: 'POST', url: '/API/interviews', data: interview })
			// .then(console.log('Interview POST'));
			// .then(undefined);
			.then(function (serverResponse) {
				console.log('Interview POST', serverResponse)
				return serverResponse
			})
	},
	
	all: function() {
		return Interview.vm();
  }

};