var db          = require('../db.js')
var Promise     = require('bluebird')
var General     = require('../lib/general.js');
var Membership  = module.exports = General.access('memberships')

  module.exports.sync = function (user_uid, memberships) {

    return db('memberships').where({ user_uid: user_uid }).then(function(mems) {

      var previousMemIds = mems.map( getProp('uid') );

      return Promise.all(memberships.map(function(mem) {
        return Membership.updateOrCreate( extractMembershipData(user_uid, mem) );
      }))
      .then(function(newMems) {
        var currentMemIds = newMems.map( getProp('uid') );

        return Promise.all(previousMemIds.map(function(memId) {
          var stillExists = currentMemIds.indexOf(memId) >= 0
          return stillExists ? Promise.resolve() : Membership.destroy(memId)
        }))
        .then(function(results) {
          // End goal is to return list of membership ids that still exist
          return results.filter(echo);
        })
      })
    })
  }

function extractMembershipData (user_uid, oauthMem) {
    return {
        uid: oauthMem.uid,
        user_uid: user_uid,
        group_uid: oauthMem.group.uid,
        role: oauthMem.role
    };
};
