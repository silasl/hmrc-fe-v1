(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
	(global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function(undefined) {

	  // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Array/prototype/forEach/detect.js
	  var detect = (
	    'forEach' in Array.prototype
	  );

	  if (detect) return

	  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.forEach&flags=always
	  (function () {
	    Array.prototype.forEach = function forEach(callback) {
	      if (this === undefined || this === null) {
	        throw new TypeError(this + " is not an object");
	      }
	    
	      if (typeof callback !== "function") {
	        throw new TypeError(callback + " is not a function");
	      }
	    
	      var object = Object(this),
	        scope = arguments[1],
	        arraylike = object instanceof String ? object.split("") : object,
	        length = Math.max(Math.min(arraylike.length, 9007199254740991), 0) || 0,
	        index = -1;
	    
	      while (++index < length) {
	        if (index in arraylike) {
	          callback.call(scope, arraylike[index], index, object);
	        }
	      }
	    };
	  }());
	}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	var forEach = {

	};

	return forEach;

})));
