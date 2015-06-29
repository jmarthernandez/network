require('../ext/arrays.js')
require('../ext/functions.js')
require('../ext/globals.js')

var browserify = require('browserify-middleware')
var glob = require('glob')
var express = require('express')
var app = express()
var port = process.env.PORT || 4000
var host = process.env.HOST || 'http://localhost:' + port

//provide a browserified file at a path
var shared = ['mithril', './ext/functions.js']
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


//API endpoint integration
require('./makerpass').mount(app, host);
require('./API/jobs-api').mount(app);
require('./API/users-api').mount(app);
require('./API/companies-api').mount(app);
require('./API/groups-api').mount(app);
require('./API/applications-api').mount(app);
require('./API/questions-api').mount(app);
require('./API/titles-api').mount(app);
require('./API/memberships-api').mount(app);
require('./API/interviews-api').mount(app);
require('./API/contacts-api').mount(app);
require('./API/schools-api').mount(app);
require('./API/messages-api').mount(app);


app.listen(port)
console.log("Listening on port", port)
