var m = require('mithril');
var StudentApp =  require('./StudentApp.js')

//TODO: Comment and fix functionality
var Interview = module.exports = {

	vm: function (attrs) {
		attrs = attrs || '';

		return {
			app_id: m.prop(null),
			// user_id: m.prop(StudentApp.studentInfo.uid),
			type: m.prop(null),
			contacts: m.prop(null),
			scheduled_on: m.prop(null),
			occured_on: m.prop(null),
			follow_up: m.prop(null),
			quality: m.prop(null),
			preparedness: m.prop(null),
			info: {
				questions: m.prop(null),
			}
		};
	},

	vmApp: function (attrs) {
		attrs = attrs || '';

		return {};
	},

	fetchInt: function (req) {
		return m.request({ methods: 'GET', url: '/API/interviews/' })
	},

	updatePhase: function(applicationFormData) {
	  return m.request({ method: 'POST', url: '/API/applications/', data: applicationFormData})
	},

	postInterview: function (interview) {
		return m.request({ method: 'POST', url: '/API/interviews', data: interview })
			.then(function (serverResponse) {
				return serverResponse
			})
	},
	
	all: function() {
		return Interview.vm();
  }

};