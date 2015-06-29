var assert = require('assert');
var db   = require(__server + '/db');
var User = require(__server + '/models/user.js');

describe('User Model', function() {

  beforeEach(function() {
    // Mocha supports promises. Just return them :)
    return db.deleteEverything();
  });

  it("creates a user", function() {
    return User.create({ uid: 'abc123' });
  });

  it("retrieves a user", function() {
    return User.create({ uid: 'abc123' }).then(User.find.papp('abc123'));
  });
});
