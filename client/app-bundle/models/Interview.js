var m = require('mithril');
var StudentApp =  require('./StudentApp.js')

//TODO: Comment and fix functionality
var Interview = module.exports = {

	vm: function (attrs) {
		attrs = attrs || '';

		return {
			// id: attrs.id,
			user_id: m.prop(StudentApp.studentInfo.uid),
			type: m.prop(null),
			contacts: m.prop(null),
			scheduled_on: m.prop(null),
			occured_on: m.prop(null),
			follow_up:m.prop(null),
			quality: m.prop(null),
			// questions: m.prop(null),
			preparedness: m.prop(null),
			info: {
				questions: m.prop(null),
			}
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