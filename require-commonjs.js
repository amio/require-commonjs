(function (scope){

  function requireCommonjs(urls, callback = function(){}){
  	var registry = {}
  	return Promise.all(urls.map(function (url) {
    	return window.fetch(url)
      	.then(function (resp) { return resp.text() })
        .then(function (text) { return evalCommonModule(text) })
    	}
    )).then(function (modules) {
      callback.apply(this, modules)
      return modules
    })
  }

  function evalCommonModule(text){
  	var module = { exports: {} }
    var exports = module.exports
    var require = function () {
      console.error('[requireCommonjs]: do not support `require()` in module.')
    }
    eval(text)
    return module.exports
  }

  scope.requireCommonjs = requireCommonjs
})(window)
