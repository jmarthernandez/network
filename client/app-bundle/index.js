var m               = require('mithril');

// Helpers
var Auth            = require('../lib/auth.js');
var App             = require('./app.js');

// Views
var Outcomes        = require('./views/Outcomes.js');
var StudentProfile  = require('./views/StudentProfile.js');
var Splash          = require('./views/Splash.js');
var Fuzzy           = require('./views/fuzzy.js');

//Forms
var NewApp          = require('./components/forms/NewApp.js');
var FollowUp        = require('./components/forms/FollowUp.js');
var CodingChallenge = require('./components/forms/CodingChallenge.js');
var OnsiteInterview = require('./components/forms/OnsiteInterview.js');
var PhoneScreen     = require('./components/forms/PhoneScreen.js');
var TechnicalScreen = require('./components/forms/TechnicalScreen.js');


var checkAuth = function(authorization, componentsArr) {
  //TODO: Check role of user and redirect correctly
  console.log('in checkAuth')
  if(authorization()){      
    return App.layout(componentsArr);
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

  '/codingchallenge': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(CodingChallenge));
    }
  },

  '/followup': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(FollowUp));
    }
  },

  '/onsiteinterview': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(OnsiteInterview));
    }
  },

  '/phonescreen': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(PhoneScreen));
    }
  },

  '/technicalscreen': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(TechnicalScreen));
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