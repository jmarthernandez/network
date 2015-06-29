var m              = require('mithril');

// Helpers
var Auth           = require('../lib/auth.js');
var App            = require('./app.js');

// Views
var Outcomes       = require('./views/Outcomes.js');
var StudentProfile = require('./views/StudentProfile.js');
var Splash         = require('./views/Splash.js');

var checkAuth = function(authorization, componentsArr) {
  //TODO: Check role of user and redirect correctly
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

  '/fuzzy': {
    controller: function () {
      var ctrl = this;
      ctrl.user = Auth.currentUser();
      
    },
    view: function (ctrl) {
      return checkAuth(ctrl.user, m.component(Fuzzy));
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