require('./ext/arrays.js')
require('./ext/functions.js')
require('./ext/globals.js')

process.env.NODE_ENV = 'test'

var fs   = require('fs')
var Path = require('path')

// Test helpers
global.__server = __dirname + '/server'
global.__client = __dirname + '/client'

var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
global.expect = chai.expect

global.getFixture = function (filename) {
  var contents = fs.readFileSync( Path.join('./test/fixtures', filename), 'utf8' )
  return JSON.parse(contents)
}
