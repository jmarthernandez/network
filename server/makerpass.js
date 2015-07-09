//
// Authentication with MakerPass
//
var passport = require('passport')
var MakerpassStrategy = require('passport-makerpass').Strategy
var Promise    = require('bluebird')
var User       = require('./models/User')
var Group      = require('./models/Group')
var Membership = require('./models/Membership')
var School     = require('./models/School')

exports.mount = function (app, host) {

  if (! process.env.MAKERPASS_CLIENT_ID || ! process.env.MAKERPASS_CLIENT_SECRET) {
    throw new Error("Please set MAKERPASS_CLIENT_ID and MAKERPASS_CLIENT_SECRET")
  }

  passport.use(new MakerpassStrategy({
      clientID: process.env.MAKERPASS_CLIENT_ID,
      clientSecret: process.env.MAKERPASS_CLIENT_SECRET,
      callbackURL: host + '/auth/makerpass/callback'
    },
    function(accessToken, refreshToken, profile, done) {

      importAuthData(profile).then(done.papp(null))
    }
  ))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done) {
    done(null, user.uid)
  })

  passport.deserializeUser(function(id, done) {
    User.find(id).then(done.papp(null))
      .catch(function (err) {
        if (err.message === 'not_found') {
          done(null, null)
        }
        else {
          done(err)
        }
      })
  })

  app.get('/auth/makerpass',
    passport.authenticate('makerpass'))

  app.get('/auth/makerpass/callback',
    passport.authenticate('makerpass', { failureRedirect: '/' }),
    function(req, res) {
      // Successful authentication, redirect home.sj
      res.redirect('/?/profile')
    })

  app.get('/users', function(req, res){
    var users = User.retrieve(function(x){res.send({users: x})
    })
  })


app.get('/me', function(req, res){
    res.send({ user: req.user})
  })


  app.post('/signout', function (req, res) {
    req.session = null
    res.send({})
  })
}

var importAuthData = module.exports.importAuthData = function (mks) {

  // These two can run in parallel
  var userPromise = importUser(mks)
  var schoolPromises = mks.schools.map(School.updateOrCreate)

  return Promise.all(schoolPromises).then(function() {
    return Promise.all( mks.memberships.map( getProp('group') ).map(Group.updateOrCreate) )
  }).then(function() {
    return Membership.sync(mks.uid, mks.memberships)
  }).then(function() {
    return userPromise;
  })
}


function importUser (mks) {
  return User.updateOrCreate({
    uid: mks.id,
    name: mks.name,
    email: mks.email,
    avatar_url: mks.avatar_url
  })
}
