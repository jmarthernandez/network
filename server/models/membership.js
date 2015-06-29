var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Membership = module.exports = {

  //creates a membership in the DB
  create: function (attrs) {
    attrs.created_at = new Date();
    return db('memberships').insert(attrs).return(attrs);
  },

  //updates a membership information in the DB
  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('memberships').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs;
      });
  },
  
  //updates or creates a specific membership depending on prior status
  updateOrCreate: function (attrs) {
    return Membership.update(attrs).catch(Membership.create.papp(attrs));
  },
  
  //destroys a membership in the DB
  destroy: function (uid) {
    return db('memberships').where({ uid: uid }).delete();
  },

  sync: function (user_uid, memberships) {

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
}

function extractMembershipData (user_uid, oauthMem) {
    return {
        uid: oauthMem.uid,
        user_uid: user_uid,
        group_uid: oauthMem.group.uid,
        role: oauthMem.role
    };
};
