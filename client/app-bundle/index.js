var m = require('mithril')
var Page = require('./components/page/page.js')


var App = {}

App.controller = function () {
  var ctrl = this
}

App.view = function (ctrl) {
  return [
    m('h1', "The New Learn App"),
    m.component(Page, { content: "Hello, I am a page component." })
  ]
}

m.mount(document.getElementById('app'), App)
