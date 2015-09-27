// Authentication with google
var passport       = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;;
var Promise        = require('bluebird')
var User           = require('./models/User')
var Group          = require('./models/Group')
var Membership     = require('./models/Membership')
var School         = require('./models/School')

exports.mount = function (app, host) {

  if (! process.env.GOOGLE_CLIENT_ID || ! process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET")
  }

  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: host + '/auth/google/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      importUser(profile).then(done.papp(null))
      
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

  app.get('/auth/google',
    passport.authenticate('google'))

  app.get('/auth/google/callback',
    passport.authenticate('google', { scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ], failureRedirect: '/' }),
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

function importUser (user) {
  return User.updateOrCreate({
    uid: user.id,
    name: user.displayName,
    email: user.email,
    avatar_url: user._json.image.url
  })
}
