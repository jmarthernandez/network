//
// Authentication with MakerPass
//
var passport = require('passport')
var MakerpassStrategy = require('passport-makerpass').Strategy
var User = require('./models/user.js')

module.exports = function (app, host) {

  if (! process.env.MAKERPASS_CLIENT_ID || ! process.env.MAKERPASS_CLIENT_SECRET) {
    throw new Error("Please set MAKERPASS_CLIENT_ID and MAKERPASS_CLIENT_SECRET")
  }

  passport.use(new MakerpassStrategy({
      clientID: process.env.MAKERPASS_CLIENT_ID,
      clientSecret: process.env.MAKERPASS_CLIENT_SECRET,
      callbackURL: host + '/auth/makerpass/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("Signed in with Makerpass", profile)

      User.updateOrCreate({
          uid: profile.id,
          name: profile.name,
          email: profile.email,
          avatarUrl: profile.avatarUrl
        })
        .then(done.papp(null))
    }
  ))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done) {
    console.log("Serializing user", user)
    done(null, user.uid)
  })

  passport.deserializeUser(function(id, done) {
    User.find(id)
      .then(done.papp(null))
      .catch(function (err) {
        if (err === 'not_found') {
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
      // Successful authentication, redirect home.
      res.redirect('/')
    })

  app.get('/me', function (req, res) {
    res.send({ user: req.user })
  })

  app.post('/signout', function (req, res) {
    req.session = null
    res.send({})
  })

}
