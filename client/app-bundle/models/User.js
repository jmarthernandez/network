var m = require('mithril');

var User = module.exports = {

  getUser: function(data, callback){
    return m.request({ method: 'GET', url: 'api/applications/' + data}).then(function(x){callback(x)})
  },


  arrange: function(users,callback){
    var apps = {1: [], 2: [], 3: [], 4: [], 5: []};

    User.getUser(users, function(applicationsResponse) {
      if (!Array.isArray(applicationsResponse.Application)) {
        apps = false;
      } else {
        apps = {1: [], 2: [], 3: [], 4: [], 5: []};
        applicationsResponse.Application.forEach(function(app){
          apps[app.phase].push(app);
        });
      }
       callback({apps: apps});
    });
  }

};