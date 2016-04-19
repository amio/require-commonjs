(function (scope){

  function requireCommonjs(urls, callback){
  	var registry = {}
  	return Promise.all(urls.map(function (url) {
    	return window.fetch(url)
      	.then(function (resp) { return resp.text() })
        .then(function (text) { return evalCommonModule(text) })
    	}
    )).then(function (modules) {
      if (typeof callback === 'function') callback.apply(this, modules)
      return modules
    })
  }

  function evalCommonModule(text){
  	var module = { exports: {} }
    var exports = module.exports
    eval(text)
    return module.exports.default || module.exports
  }

  scope.requireCommonjs = requireCommonjs
})(window)
