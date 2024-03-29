(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
	(global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function(undefined) {
	  // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Object/keys/detect.js
	  var detect = (
	    'keys' in Object && (function () {
	        // Safari 5.0 bug where Object.keys doesn't work with arguments
	        return (Object.keys(arguments)).length === 2;
	    }(1, 2)) && (function () {
	        try {
	            return true;
	        } catch (e) {
	            return false;
	        }
	    }())
	  );

	  if (detect) return

	  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.assign&flags=always
	  Object.keys = (function() {

	    // modified from https://github.com/es-shims/object-keys

	    var has = Object.prototype.hasOwnProperty;
	    var toStr = Object.prototype.toString;
	    var isEnumerable = Object.prototype.propertyIsEnumerable;
	    var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
	    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
	    var dontEnums = [
	      "toString",
	      "toLocaleString",
	      "valueOf",
	      "hasOwnProperty",
	      "isPrototypeOf",
	      "propertyIsEnumerable",
	      "constructor"
	    ];
	    var equalsConstructorPrototype = function(o) {
	      var ctor = o.constructor;
	      return ctor && ctor.prototype === o;
	    };
	    var excludedKeys = {
	      $console: true,
	      $external: true,
	      $frame: true,
	      $frameElement: true,
	      $frames: true,
	      $innerHeight: true,
	      $innerWidth: true,
	      $outerHeight: true,
	      $outerWidth: true,
	      $pageXOffset: true,
	      $pageYOffset: true,
	      $parent: true,
	      $scrollLeft: true,
	      $scrollTop: true,
	      $scrollX: true,
	      $scrollY: true,
	      $self: true,
	      $webkitIndexedDB: true,
	      $webkitStorageInfo: true,
	      $window: true
	    };
	    var hasAutomationEqualityBug = (function() {
	      /* global window */
	      if (typeof window === "undefined") {
	        return false;
	      }
	      for (var k in window) {
	        try {
	          if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
	            try {
	              equalsConstructorPrototype(window[k]);
	            } catch (e) {
	              return true;
	            }
	          }
	        } catch (e) {
	          return true;
	        }
	      }
	      return false;
	    })();
	    var equalsConstructorPrototypeIfNotBuggy = function(o) {
	      /* global window */
	      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
	        return equalsConstructorPrototype(o);
	      }
	      try {
	        return equalsConstructorPrototype(o);
	      } catch (e) {
	        return false;
	      }
	    };

	    function isArgumentsObject(value) {
	      var str = toStr.call(value);
	      var isArgs = str === "[object Arguments]";
	      if (!isArgs) {
	        isArgs =
	          str !== "[object Array]" &&
	          value !== null &&
	          typeof value === "object" &&
	          typeof value.length === "number" &&
	          value.length >= 0 &&
	          toStr.call(value.callee) === "[object Function]";
	      }
	      return isArgs;
	    }

	    return function keys(object) {
	      var isFunction = toStr.call(object) === "[object Function]";
	      var isArguments = isArgumentsObject(object);
	      var isString = toStr.call(object) === "[object String]";
	      var theKeys = [];

	      if (object === undefined || object === null) {
	        throw new TypeError("Cannot convert undefined or null to object");
	      }

	      var skipProto = hasProtoEnumBug && isFunction;
	      if (isString && object.length > 0 && !has.call(object, 0)) {
	        for (var i = 0; i < object.length; ++i) {
	          theKeys.push(String(i));
	        }
	      }

	      if (isArguments && object.length > 0) {
	        for (var j = 0; j < object.length; ++j) {
	          theKeys.push(String(j));
	        }
	      } else {
	        for (var name in object) {
	          if (!(skipProto && name === "prototype") && has.call(object, name)) {
	            theKeys.push(String(name));
	          }
	        }
	      }

	      if (hasDontEnumBug) {
	        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

	        for (var k = 0; k < dontEnums.length; ++k) {
	          if (
	            !(skipConstructor && dontEnums[k] === "constructor") &&
	            has.call(object, dontEnums[k])
	          ) {
	            theKeys.push(dontEnums[k]);
	          }
	        }
	      }
	      return theKeys;
	    };
	  })();
	}.call(("object" === typeof window && window) || ("object" === typeof self && self) || ("object" === typeof commonjsGlobal && commonjsGlobal) || {}));

	var keys = {

	};

	return keys;

})));
