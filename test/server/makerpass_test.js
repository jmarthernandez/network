var fs = require('fs')
var db = require(__server + '/db')
var Promise = require('knex/node_modules/bluebird')
var Makerpass  = require(__server + '/makerpass')
var Group      = require(__server + '/models/group')
var User       = require(__server + '/models/user')
var School     = require(__server + '/models/school')

describe('Makerpass Functions', function(){

  beforeEach(function() {
    // Mocha supports promises. Just return them :)
    return db.deleteEverything()
  })

  var makerpassData = getFixture('makerpass.json')
  var user_uid   = makerpassData.uid
  var group_uid1 = makerpassData.memberships[0].group.uid
  var group_uid2 = makerpassData.memberships[1].group.uid
  var school_uid = makerpassData.schools[0].uid

  it("imports Makerpass data", function() {
    return Makerpass.importAuthData(makerpassData).then(function() {

      return Promise.all([
        User.find(user_uid),
        Group.find(group_uid1),
        Group.find(group_uid2),
        expect( db('memberships').where({ user_uid: user_uid }) ).to.eventually.have.length(2),
        School.find(school_uid),
        expect( db('groups').where({ school_uid: school_uid }) ).to.eventually.have.length(2),
      ])
    })
  })

  it("returns the user", function() {
    var user = Makerpass.importAuthData(makerpassData)
    return expect(user).to.eventually.contain.keys({ uid: user_uid, name: 'Gilbert' })
  })

  it("works fine if run multiple times", function() {
    return Makerpass.importAuthData(makerpassData).then(function() {
      return Makerpass.importAuthData(makerpassData)
    })
  })

  it("prunes old memberships", function() {
    return Makerpass.importAuthData(makerpassData).then(function() {
      var makerpassData2 = getFixture('makerpass.json')
      makerpassData2.memberships.pop()

      return Makerpass.importAuthData(makerpassData2).then(function() {
        var mems = db('memberships').where({ user_uid: user_uid })
        return Promise.all([
          expect( mems ).to.eventually.have.length(1),
          expect( mems.then(queryProp('0.group_uid')) ).to.eventually.equal(group_uid1)
        ])
      })
    })
  })
})
