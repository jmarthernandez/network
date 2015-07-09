var m = require('mithril');

var LookupUser = module.exports = {

  getUser: function(data, callback){
    return m.request({ method: 'GET', url: 'api/applications/' + data}).then(function(x){callback(x)})
  }
};