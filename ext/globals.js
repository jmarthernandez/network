(function (global) {
  global.getProp = function (propName) {
    return function (obj) { return obj[propName] }
  }

  global.queryProp = function (query) {
    var segments = query.split('.')
    return function (obj) {
      var result = obj
      for (var i=0; i < segments.length; i++) {
        result = result[segments[i]]
        if (typeof result === 'function') result = result()
      }
      return result
    }
  }

  global.propEq = function (propName, value) {
    return function (obj) { return obj[propName] === value }
  }

  global.setObjProp = function (obj, propName) {
    return function (value) { obj[propName] = value; return obj }
  }

  global.echo = function (x) { return x }

})(typeof global === 'object' ? global : window)
