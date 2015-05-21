//
// Authentication with MakerPass
//
var passport = require('passport')
var MakerpassStrategy = require('passport-makerpass').Strategy

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
      // TODO: Find or create from database
      console.log("Signed in with Makerpass", profile.id, profile.name)
      done(null, { id: profile.id })
    }
  ))

  app.use(passport.initialize())
  app.use(passport.session())

  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function(id, done) {
    // TODO: Fetch from database
    done(null, { id: id, name: 'Alice' })
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
