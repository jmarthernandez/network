require('../ext')

var browserify = require('browserify-middleware')
var glob = require('glob')
var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var host = process.env.HOST || 'http://localhost:' + port

//provide a browserified file at a path
var shared = ['mithril', 'highcharts', 'jquery']
app.get('/js/vendor.js', browserify(shared))
app.get('/js/app-bundle.js', browserify('./client/app-bundle/index.js', { external: shared }))

// Non-js static files
app.use(express.static('client/public'))


var session = require('cookie-session')
app.use(session({
  name: 'learn:session',
  secret: process.env.SESSION_SECRET || 'development',
  secure: (!! process.env.SESSION_SECRET),
  signed: true
}))

//enable express router resource which facilitate shared endpoint routing
var resource = require('express-resource');

// bodyparser for endpoint conversion of JSON objects
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();


//API endpoint integration
require('./makerpass').mount(app, host);
app.use('/API/jobs', require('./API/jobs-api'));
app.use('/API/users', require('./API/users-api'));
app.use('/API/companies', require('./API/companies-api'));
app.use('/API/questions', require('./API/questions-api'));
app.use('/API/messages',require('./API/messages-api'));
app.use('/API/groups', require('./API/groups-api'));
app.use('/API/titles',require('./API/titles-api'));
app.use('/API/memberships',require('./API/memberships-api'));
app.use('/API/interviews',require('./API/interviews-api'));
app.use('/API/contacts',require('./API/contacts-api'));
app.use('/API/applications',require('./API/applications-api'));
app.use('/API/schools',require('./API/schools-api'));
app.use('/API/fuzzy',require('./API/fuzzy-api'));




app.listen(port)
console.log("Listening on port", port)
