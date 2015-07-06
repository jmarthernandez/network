var m = require('mithril')
var fuzzyMatch = require('../../../node_modules/fuzzysearch-js/js/FuzzySearch.js')
var Fuzzy = require('../models/fuzzy.js')
 
var AutocompleteInput = module.exports = {}


Function.prototype.papp = function () {
  var slice = Array.prototype.slice
  var fn = this
  var args = slice.call(arguments)
  return function () {
    return fn.apply(this, args.concat(slice.call(arguments)))
  }
};

Function.prototype.chill = function() {
  var fn = this
  return function(e) {
    e.preventDefault()
    return fn()
  }
};


 

// attr.options is expected to be an array of objects
AutocompleteInput.controller = function (attrs) {
  var ctrl = this;
  var inititalOptions = attrs.initialOptions || [];

  
  ctrl.isFocused = m.prop(false);
  ctrl.dropdownIndex = m.prop(0);
  ctrl.mode = m.prop('keyboard');
  ctrl.query = m.prop(null);
 
  ctrl.options = m.prop([]);
 
  ctrl.select = function () {
    var opt = ctrl.options()[ ctrl.dropdownIndex() ]
    if (opt) {
      attrs.onSelect(opt.id || opt.uid) // Send back id
      pendingInputValue = attrs.optionView(opt)
    }
    ctrl.reset()
    // ctrl.isFocused(true)
    if (ctrl.mode() === 'mouse') blur = true;
  }
 
  ctrl.reset = function (value) {
    clearTimeout(lastSearchTimeout);
    ctrl.dropdownIndex(0);
    ctrl.query(value);
    m.redraw();
  };
 
  ctrl.onkeydown = function (e) {
    var key = e.keyCode || e.which;
    if (key !== 38 && key !== 40 && key !== 13 && key !== 27) return;
    e.preventDefault();
    ctrl.mode('keyboard')
 
    var idx = +ctrl.dropdownIndex()
    if (key === 38) ctrl.dropdownIndex(Math.max(idx - 1, 0))
    if (key === 40) ctrl.dropdownIndex(Math.min(idx + 1, ctrl.options().length - 1))
    if (key === 13) ctrl.select()
    if (key === 27) { blur = true; ctrl.isFocused(false) }
  };
 
  var lastSearchTimeout = null
  ctrl.onkeyup = function (e) {
    var query = ctrl.query()
    var newQuery = e.currentTarget.value;

    if (newQuery.length < 1) {
      ctrl.query(null)
      ctrl.options(inititalOptions)
    }
    else if (newQuery !== query) {
      
      ctrl.mode('keyboard');
      ctrl.dropdownIndex(0);
      ctrl.query(newQuery);

      // Fuzzy.companySearch(newQuery).then(ctrl.options);      
      Fuzzy.search(attrs.search, newQuery).then(ctrl.options);
    }
  }
 
  var blur = false
  var pendingInputValue = null
  ctrl.cleanInput = function (input) {

    if (blur) {
      input.blur(); ctrl.reset(); blur = false
    }
    if (pendingInputValue) {
      input.value = pendingInputValue
      pendingInputValue = null;
    }
  }
 
  // Format: [['myOptionValue', 'myOptionDisplayText', 'myoptiondisplaytext'], ...]
  function updateAllOptions (options) {
    inititalOptions = options.map(function(op) {
      return [ op[attrs.idAttr], op[attrs.searchAttr], op[attrs.searchAttr].toLowerCase() ]
    })
    if (ctrl.query() === null) ctrl.options(inititalOptions)
  }
}
 
AutocompleteInput.view = function (ctrl, attrs) {

  var ddIdx = ctrl.dropdownIndex()
  var mode = ctrl.mode()
  var queryRegex = ctrl.query() && new RegExp('(.*)('+ctrl.query()+')(.*)', 'i')
 
  return m('.row', [

    m('.autocomplete-input.col.s12.m4', [
    
    m('input[type=text]', {
      key: 'autocomplete',
      config: ctrl.cleanInput,
      onkeyup: ctrl.onkeyup,
      onkeydown: ctrl.onkeydown,
      onfocus: ctrl.isFocused.papp(true),
      onblur: ctrl.isFocused.papp(false),
      placeholder: attrs.placeholder
    }),
    ctrl.isFocused() ?
      m('.autocomplete-input--select-drop', [
        m('ul', { class: mode, onmouseover: selectHovered, onmousedown: ctrl.select.chill() }, renderOptions(ctrl.query()))
      ])
      : null,

      ]),
        ctrl.options().length === 0 && ctrl.query !== null ? 'Add a ' + attrs.name : 'red'
    ])
 
  function renderOptions (query) {
    if (ctrl.options().length === 0 && query !== null) {
      return m('.row',
        m('li.right-align', 
          m('i', "No matches found.")
        ))
   	} else {
      return ctrl.options().map(optionView)
  	}
  }

  function optionView (opt, i) {
    return m('li', {
      'class': (mode === 'keyboard' && ddIdx == i) ? 'active' : 'no-hover',
      'data-idx': i
    }, attrs.optionView(opt) )
  }

  function selectHovered (e) {
    if (e.target.tagName !== 'LI') return;
    var idx = e.target.getAttribute('data-idx')
    ctrl.dropdownIndex(idx)
    ctrl.mode('mouse')
  }
}