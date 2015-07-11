require('../../ext')
var m               = require('mithril');

// Helpers
var Auth            = require('../lib/auth.js');
var App             = require('./app.js');

// Views
var Outcomes        = require('./views/Outcomes.js');
var StudentProfile  = require('./views/StudentProfile.js');
var Splash          = require('./views/Splash.js');
var AppDetail       = require('./views/AppDetail.js');
var Fuzzy           = require('./views/fuzzy.js');

//Forms
var NewApp          = require('./components/forms/NewApp.js');
var FollowUp        = require('./components/forms/FollowUp.js');
var CodingChallenge = require('./components/forms/CodingChallenge.js');
var OnsiteInterview = require('./components/forms/OnsiteInterview.js');
var PhoneScreen     = require('./components/forms/PhoneScreen.js');
var TechnicalScreen = require('./components/forms/TechnicalScreen.js');
var AddContact      = require('./components/forms/AddContact.js');
var AddTitle        = require('./components/forms/AddTitle.js');
var AddCompany      = require('./components/forms/AddCompany.js');

//Models
var Interview       = require('./models/Interview.js');
 

var checkAuth = function(authorization, componentsArr) {
  //TODO: Check role of user and redirect correctly
  if(authorization()){     
    return App.layout(componentsArr, authorization());
  }else{
    return m.component(Splash);
  }
};


var routes = {

  '/': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return  m.component(Splash);
    }
  },

  '/profile': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(StudentProfile, ctrl));
    }
  },

  '/appdetail/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id');
      Interview.fetchIntsForApp(ctrl.appId)
    },
    view: function (ctrl) {
      var interviews = Interview.intsForApp();
      return  checkAuth(ctrl.user, m.component(AppDetail, interviews.Interviews));
    }
  },

  '/profile/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.thisUserId = m.route.param('id');
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(StudentProfile, ctrl));
    }
  },

  '/newapp': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(NewApp));
    }
  },

  '/codingchallenge/:id': {
    controller: function () {
      var ctrl  = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id')
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(CodingChallenge, {app_id: ctrl.appId}));
    }
  },

  '/followup/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id')
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(FollowUp, {app_id: ctrl.appId}));
    }
  },

  '/onsiteinterview/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id')
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(OnsiteInterview, {app_id: ctrl.appId}));
    }
  },

  '/phonescreen/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id')
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(PhoneScreen, {app_id: ctrl.appId}));
    }
  },

  '/technicalscreen/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id')
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(TechnicalScreen, {app_id: ctrl.appId}));
    }
  },


  '/title/': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(AddTitle));
    }
  },

  '/company/': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(AddCompany));
    }
  },

  '/contacts/:id': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      ctrl.appId = m.route.param('id')
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(AddContact),  {app_id: ctrl.appId});
    }
  },

  '/outcomes': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(Outcomes));
    }
  },


  '/signout': {
    controller: function () {
      Auth.signOut();
    },
    view: function () {
      return m.component(Splash);
    }
  }
};

m.route(document.getElementById('app'), '/', routes);