var db = require('../db.js')
var Promise = require('knex/node_modules/bluebird')

var Memberships = module.exports = {

  create: function (attrs) {
    attrs.created_at = new Date()
    return db('Memberships').insert(attrs).return(attrs)
  },

  update: function (attrs) {
    attrs.updated_at = new Date()
    return db('Memberships').update(attrs).where({ uid: attrs.uid })
      .then(function(affectedCount) {
        return (affectedCount === 0) ? Promise.reject(new Error('not_found')) : attrs
      })
  },

  updateOrCreate: function (attrs) {
    return Memberships.update(attrs).catch(Memberships.create.papp(attrs))
  },

  destroy: function (uid) {
    return db('Memberships').where({ uid: uid }).delete()
  }

}
 
function extractPhasesData (user_uid, oauthMem) {

    return {
        uid: oauthMem.uid,
        user_uid: user_uid,
        group_uid: oauthMem.group.uid,
        role: oauthMem.role
    }
}

