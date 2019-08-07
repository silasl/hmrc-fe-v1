(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
	(global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

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

	var defineProperty = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		factory();
	}(commonjsGlobal, (function () {
	(function(undefined) {

	// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
	var detect = (
	  // In IE8, defineProperty could only act on DOM elements, so full support
	  // for the feature requires the ability to set a property on an arbitrary object
	  'defineProperty' in Object && (function() {
	  	try {
	  		var a = {};
	  		Object.defineProperty(a, 'test', {value:42});
	  		return true;
	  	} catch(e) {
	  		return false
	  	}
	  }())
	);

	if (detect) return

	// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
	(function (nativeDefineProperty) {

		var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
		var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
		var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

		Object.defineProperty = function defineProperty(object, property, descriptor) {

			// Where native support exists, assume it
			if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
				return nativeDefineProperty(object, property, descriptor);
			}

			if (object === null || !(object instanceof Object || typeof object === 'object')) {
				throw new TypeError('Object.defineProperty called on non-object');
			}

			if (!(descriptor instanceof Object)) {
				throw new TypeError('Property description must be an object');
			}

			var propertyString = String(property);
			var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
			var getterType = 'get' in descriptor && typeof descriptor.get;
			var setterType = 'set' in descriptor && typeof descriptor.set;

			// handle descriptor.get
			if (getterType) {
				if (getterType !== 'function') {
					throw new TypeError('Getter must be a function');
				}
				if (!supportsAccessors) {
					throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
				}
				if (hasValueOrWritable) {
					throw new TypeError(ERR_VALUE_ACCESSORS);
				}
				Object.__defineGetter__.call(object, propertyString, descriptor.get);
			} else {
				object[propertyString] = descriptor.value;
			}

			// handle descriptor.set
			if (setterType) {
				if (setterType !== 'function') {
					throw new TypeError('Setter must be a function');
				}
				if (!supportsAccessors) {
					throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
				}
				if (hasValueOrWritable) {
					throw new TypeError(ERR_VALUE_ACCESSORS);
				}
				Object.__defineSetter__.call(object, propertyString, descriptor.set);
			}

			// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
			if ('value' in descriptor) {
				object[propertyString] = descriptor.value;
			}

			return object;
		};
	}(Object.defineProperty));
	})
	.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	})));
	});

	var bind = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		factory();
	}(commonjsGlobal, (function () {
	(function(undefined) {

	// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Object/defineProperty/detect.js
	var detect = (
	  // In IE8, defineProperty could only act on DOM elements, so full support
	  // for the feature requires the ability to set a property on an arbitrary object
	  'defineProperty' in Object && (function() {
	  	try {
	  		var a = {};
	  		Object.defineProperty(a, 'test', {value:42});
	  		return true;
	  	} catch(e) {
	  		return false
	  	}
	  }())
	);

	if (detect) return

	// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.defineProperty&flags=always
	(function (nativeDefineProperty) {

		var supportsAccessors = Object.prototype.hasOwnProperty('__defineGetter__');
		var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
		var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';

		Object.defineProperty = function defineProperty(object, property, descriptor) {

			// Where native support exists, assume it
			if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
				return nativeDefineProperty(object, property, descriptor);
			}

			if (object === null || !(object instanceof Object || typeof object === 'object')) {
				throw new TypeError('Object.defineProperty called on non-object');
			}

			if (!(descriptor instanceof Object)) {
				throw new TypeError('Property description must be an object');
			}

			var propertyString = String(property);
			var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
			var getterType = 'get' in descriptor && typeof descriptor.get;
			var setterType = 'set' in descriptor && typeof descriptor.set;

			// handle descriptor.get
			if (getterType) {
				if (getterType !== 'function') {
					throw new TypeError('Getter must be a function');
				}
				if (!supportsAccessors) {
					throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
				}
				if (hasValueOrWritable) {
					throw new TypeError(ERR_VALUE_ACCESSORS);
				}
				Object.__defineGetter__.call(object, propertyString, descriptor.get);
			} else {
				object[propertyString] = descriptor.value;
			}

			// handle descriptor.set
			if (setterType) {
				if (setterType !== 'function') {
					throw new TypeError('Setter must be a function');
				}
				if (!supportsAccessors) {
					throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
				}
				if (hasValueOrWritable) {
					throw new TypeError(ERR_VALUE_ACCESSORS);
				}
				Object.__defineSetter__.call(object, propertyString, descriptor.set);
			}

			// OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
			if ('value' in descriptor) {
				object[propertyString] = descriptor.value;
			}

			return object;
		};
	}(Object.defineProperty));
	})
	.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	(function(undefined) {
	  // Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Function/prototype/bind/detect.js
	  var detect = 'bind' in Function.prototype;

	  if (detect) return

	  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Function.prototype.bind&flags=always
	  Object.defineProperty(Function.prototype, 'bind', {
	      value: function bind(that) { // .length is 1
	          // add necessary es5-shim utilities
	          var $Array = Array;
	          var $Object = Object;
	          var ObjectPrototype = $Object.prototype;
	          var ArrayPrototype = $Array.prototype;
	          var Empty = function Empty() {};
	          var to_string = ObjectPrototype.toString;
	          var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	          var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
	          var array_slice = ArrayPrototype.slice;
	          var array_concat = ArrayPrototype.concat;
	          var array_push = ArrayPrototype.push;
	          var max = Math.max;
	          // /add necessary es5-shim utilities

	          // 1. Let Target be the this value.
	          var target = this;
	          // 2. If IsCallable(Target) is false, throw a TypeError exception.
	          if (!isCallable(target)) {
	              throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	          }
	          // 3. Let A be a new (possibly empty) internal list of all of the
	          //   argument values provided after thisArg (arg1, arg2 etc), in order.
	          // XXX slicedArgs will stand in for "A" if used
	          var args = array_slice.call(arguments, 1); // for normal call
	          // 4. Let F be a new native ECMAScript object.
	          // 11. Set the [[Prototype]] internal property of F to the standard
	          //   built-in Function prototype object as specified in 15.3.3.1.
	          // 12. Set the [[Call]] internal property of F as described in
	          //   15.3.4.5.1.
	          // 13. Set the [[Construct]] internal property of F as described in
	          //   15.3.4.5.2.
	          // 14. Set the [[HasInstance]] internal property of F as described in
	          //   15.3.4.5.3.
	          var bound;
	          var binder = function () {

	              if (this instanceof bound) {
	                  // 15.3.4.5.2 [[Construct]]
	                  // When the [[Construct]] internal method of a function object,
	                  // F that was created using the bind function is called with a
	                  // list of arguments ExtraArgs, the following steps are taken:
	                  // 1. Let target be the value of F's [[TargetFunction]]
	                  //   internal property.
	                  // 2. If target has no [[Construct]] internal method, a
	                  //   TypeError exception is thrown.
	                  // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                  //   property.
	                  // 4. Let args be a new list containing the same values as the
	                  //   list boundArgs in the same order followed by the same
	                  //   values as the list ExtraArgs in the same order.
	                  // 5. Return the result of calling the [[Construct]] internal
	                  //   method of target providing args as the arguments.

	                  var result = target.apply(
	                      this,
	                      array_concat.call(args, array_slice.call(arguments))
	                  );
	                  if ($Object(result) === result) {
	                      return result;
	                  }
	                  return this;

	              } else {
	                  // 15.3.4.5.1 [[Call]]
	                  // When the [[Call]] internal method of a function object, F,
	                  // which was created using the bind function is called with a
	                  // this value and a list of arguments ExtraArgs, the following
	                  // steps are taken:
	                  // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                  //   property.
	                  // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                  //   property.
	                  // 3. Let target be the value of F's [[TargetFunction]] internal
	                  //   property.
	                  // 4. Let args be a new list containing the same values as the
	                  //   list boundArgs in the same order followed by the same
	                  //   values as the list ExtraArgs in the same order.
	                  // 5. Return the result of calling the [[Call]] internal method
	                  //   of target providing boundThis as the this value and
	                  //   providing args as the arguments.

	                  // equiv: target.call(this, ...boundArgs, ...args)
	                  return target.apply(
	                      that,
	                      array_concat.call(args, array_slice.call(arguments))
	                  );

	              }

	          };

	          // 15. If the [[Class]] internal property of Target is "Function", then
	          //     a. Let L be the length property of Target minus the length of A.
	          //     b. Set the length own property of F to either 0 or L, whichever is
	          //       larger.
	          // 16. Else set the length own property of F to 0.

	          var boundLength = max(0, target.length - args.length);

	          // 17. Set the attributes of the length own property of F to the values
	          //   specified in 15.3.5.1.
	          var boundArgs = [];
	          for (var i = 0; i < boundLength; i++) {
	              array_push.call(boundArgs, '$' + i);
	          }

	          // XXX Build a dynamic function with desired amount of arguments is the only
	          // way to set the length property of a function.
	          // In environments where Content Security Policies enabled (Chrome extensions,
	          // for ex.) all use of eval or Function costructor throws an exception.
	          // However in all of these environments Function.prototype.bind exists
	          // and so this code will never be executed.
	          bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

	          if (target.prototype) {
	              Empty.prototype = target.prototype;
	              bound.prototype = new Empty();
	              // Clean up dangling references.
	              Empty.prototype = null;
	          }

	          // TODO
	          // 18. Set the [[Extensible]] internal property of F to true.

	          // TODO
	          // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	          // 20. Call the [[DefineOwnProperty]] internal method of F with
	          //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	          //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	          //   false.
	          // 21. Call the [[DefineOwnProperty]] internal method of F with
	          //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	          //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	          //   and false.

	          // TODO
	          // NOTE Function objects created using Function.prototype.bind do not
	          // have a prototype property or the [[Code]], [[FormalParameters]], and
	          // [[Scope]] internal properties.
	          // XXX can't delete prototype in pure-js.

	          // 22. Return F.
	          return bound;
	      }
	  });
	})
	.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	})));
	});

	(function(undefined) {

	    // Detection from https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/Object/getOwnPropertyDescriptor/detect.js
	    var detect = (
	        'getOwnPropertyDescriptor' in Object && typeof Object.getOwnPropertyDescriptor === 'function' && (function() {
	            try {
	                var object = {};
	                object.test = 0;
	                return Object.getOwnPropertyDescriptor(
	                    object,
	                    "test"
	                ).value === 0;
	            } catch (exception) {
	                return false
	            }
	        }())
	    );

	    if (detect) return

	    // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.getOwnPropertyDescriptor&flags=always
	    (function() {
	        var call = Function.prototype.call;
	        var prototypeOfObject = Object.prototype;
	        var owns = call.bind(prototypeOfObject.hasOwnProperty);

	        var lookupGetter;
	        var lookupSetter;
	        var supportsAccessors;
	        if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
	            lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
	            lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
	        }
	        function doesGetOwnPropertyDescriptorWork(object) {
	            try {
	                object.sentinel = 0;
	                return Object.getOwnPropertyDescriptor(
	                    object,
	                    "sentinel"
	                ).value === 0;
	            } catch (exception) {
	                // returns falsy
	            }
	        }
	        // check whether getOwnPropertyDescriptor works if it's given. Otherwise,
	        // shim partially.
	        if (Object.defineProperty) {
	            var getOwnPropertyDescriptorWorksOnObject =
	                doesGetOwnPropertyDescriptorWork({});
	            var getOwnPropertyDescriptorWorksOnDom = typeof document == "undefined" ||
	                doesGetOwnPropertyDescriptorWork(document.createElement("div"));
	            if (!getOwnPropertyDescriptorWorksOnDom ||
	                !getOwnPropertyDescriptorWorksOnObject
	            ) {
	                var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
	            }
	        }

	        if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
	            var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a non-object: ";

	            Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
	                if ((typeof object != "object" && typeof object != "function") || object === null) {
	                    throw new TypeError(ERR_NON_OBJECT + object);
	                }

	                // make a valiant attempt to use the real getOwnPropertyDescriptor
	                // for I8's DOM elements.
	                if (getOwnPropertyDescriptorFallback) {
	                    try {
	                        return getOwnPropertyDescriptorFallback.call(Object, object, property);
	                    } catch (exception) {
	                        // try the shim if the real one doesn't work
	                    }
	                }

	                // If object does not owns property return undefined immediately.
	                if (!owns(object, property)) {
	                    return;
	                }

	                // If object has a property then it's for sure both `enumerable` and
	                // `configurable`.
	                var descriptor = { enumerable: true, configurable: true };

	                // If JS engine supports accessor properties then property may be a
	                // getter or setter.
	                if (supportsAccessors) {
	                    // Unfortunately `__lookupGetter__` will return a getter even
	                    // if object has own non getter property along with a same named
	                    // inherited getter. To avoid misbehavior we temporary remove
	                    // `__proto__` so that `__lookupGetter__` will return getter only
	                    // if it's owned by an object.
	                    var prototype = object.__proto__;
	                    object.__proto__ = prototypeOfObject;

	                    var getter = lookupGetter(object, property);
	                    var setter = lookupSetter(object, property);

	                    // Once we have getter and setter we can put values back.
	                    object.__proto__ = prototype;

	                    if (getter || setter) {
	                        if (getter) {
	                            descriptor.get = getter;
	                        }
	                        if (setter) {
	                            descriptor.set = setter;
	                        }
	                        // If it was accessor property we're done and return here
	                        // in order to avoid adding `value` to the descriptor.
	                        return descriptor;
	                    }
	                }

	                // If we got this far we know that object has an own property that is
	                // not an accessor so we set it as a value and return descriptor.
	                descriptor.value = object[property];
	                descriptor.writable = true;
	                return descriptor;
	            };
	        }
	    }());
	}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

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

	(function (undefined) {

	  // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Object/assign/detect.js
	  var detect = (
	    'assign' in Object
	  );

	  if (detect) return

	  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Object.assign&flags=always
	  (function () {

	    // 7.1.13 ToObject ( argument )
	    function toObject(argument) {
	      if (argument === null || argument === undefined) {
	        throw new TypeError('Cannot call method on ' + argument);
	      }
	      return Object(argument);
	    }

	    Object.defineProperty(Object, 'assign', {
	      enumerable: false,
	      configurable: true,
	      writable: true,
	      value: function assign(target, source) { // eslint-disable-line no-unused-vars

	        // 1. Let to be ? ToObject(target).
	        var to = toObject(target);

	        // 2. If only one argument was passed, return to.
	        if (arguments.length === 1) {
	          return to;
	        }

	        // 3. Let sources be the List of argument values starting with the second argument
	        var sources = Array.prototype.slice.call(arguments, 1);

	        // 4. For each element nextSource of sources, in ascending index order, do
	        var index1;
	        var index2;
	        var keys;
	        var from;
	        for (index1 = 0; index1 < sources.length; index1++) {
	          var nextSource = sources[index1];
	          // 4a. If nextSource is undefined or null, let keys be a new empty List.
	          if (nextSource === undefined || nextSource === null) {
	            keys = [];
	            // 4b. Else,
	          } else {
	            // 4bi. Let from be ! ToObject(nextSource).
	            from = toObject(nextSource);
	            // 4bii. Let keys be ? from.[[OwnPropertyKeys]]().
	            /*
	              This step in our polyfill is not complying with the specification.
	              [[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
	              TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
	            */
	            keys = Object.keys(from);
	          }

	          // 4c. For each element nextKey of keys in List order, do
	          for (index2 = 0; index2 < keys.length; index2++) {
	            var nextKey = keys[index2];
	            // 4ci. Let desc be ? from.[[GetOwnProperty]](nextKey).
	            var desc = Object.getOwnPropertyDescriptor(from, nextKey);
	            // 4cii. If desc is not undefined and desc.[[Enumerable]] is true, then
	            if (desc !== undefined && desc.enumerable) {
	              // 4cii1. Let propValue be ? Get(from, nextKey).
	              var propValue = from[nextKey];
	              // 4cii2. Perform ? Set(to, nextKey, propValue, true).
	              to[nextKey] = propValue;
	            }
	          }
	        }
	        // 5. Return to.
	        return to;
	      }
	    });
	  }());
	}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

	(function(undefined) {

	  // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/Date/now/detect.js
	  var detect = (
	    'Date' in this && 'now' in this.Date && 'getTime' in this.Date.prototype
	  );

	  if (detect) return

	  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Array.prototype.forEach&flags=always
	  Date.now = function now() {
	    return new Date().getTime();
	  };
	}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	/**
	 * TODO: Ideally this would be a NodeList.prototype.forEach polyfill
	 * This seems to fail in IE8, requires more investigation.
	 * See: https://github.com/imagitama/nodelist-foreach-polyfill
	 */
	function nodeListForEach (nodes, callback) {
	  if (window.NodeList.prototype.forEach) {
	    return nodes.forEach(callback)
	  }
	  for (var i = 0; i < nodes.length; i++) {
	    callback.call(window, nodes[i], i, nodes);
	  }
	}

	/* global XMLHttpRequest, ActiveXObject */

	var utils = {
	  generateDomElementFromString: function (str) {
	    var abc = document.createElement('div');
	    abc.innerHTML = str;
	    return abc.firstChild
	  },

	  generateDomElementFromStringAndAppendText: function (str, text) {
	    var $tmp = utils.generateDomElementFromString(str);
	    $tmp.innerText = text;
	    return $tmp
	  },

	  hasClass: function (selector, className) {
	    return document.querySelector(selector).classList.contains(className)
	  },

	  addClass: function (selector, className) {
	    var elements = document.querySelectorAll(selector);
	    nodeListForEach(elements, function (i) { i.classList.add(className); });
	  },

	  removeClass: function (selector, className) {
	    var elements = document.querySelectorAll(selector);
	    nodeListForEach(elements, function (i) { i.classList.remove(className); });
	  },

	  removeElement: function ($elem) {
	    var parent = $elem.parentNode;
	    if (parent) {
	      parent.removeChild($elem);
	    } else {
	      console.warn("couldn't find parent for elem", $elem);
	    }
	  },

	  ajaxGet: function (url, success) {
	    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
	    xhr.open('GET', url);
	    xhr.onreadystatechange = function () {
	      if (xhr.readyState > 3 && xhr.status === 200) success(xhr.responseText);
	    };
	    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	    xhr.send();
	    return xhr
	  }
	};

	function displayDialog ($elementToDisplay) {
	  var $dialog = utils.generateDomElementFromString('<div id="hmrc-timeout-dialog" tabindex="-1" role="dialog" class="hmrc-timeout-dialog">');
	  var $overlay = utils.generateDomElementFromString('<div id="hmrc-timeout-overlay" class="hmrc-timeout-overlay">');
	  var $preparedElementToDisplay = typeof $elementToDisplay === 'string' ? utils.generateDomElementFromString($elementToDisplay) : $elementToDisplay;
	  var resetElementsFunctionList = [];
	  var closeCallbacks = [];

	  $dialog.appendChild($preparedElementToDisplay);

	  if (!utils.hasClass('html', 'noScroll')) {
	    utils.addClass('html', 'noScroll');
	    resetElementsFunctionList.push(function () {
	      utils.removeClass('html', 'noScroll');
	    });
	  }
	  document.body.appendChild($dialog);
	  document.body.appendChild($overlay);

	  resetElementsFunctionList.push(function () {
	    utils.removeElement($dialog);
	    utils.removeElement($overlay);
	  });

	  // disable the non-dialog page to prevent confusion for VoiceOver users
	  var selectors = [
	    '#skiplink-container',
	    'body > header',
	    '#global-cookie-message',
	    'body > main',
	    'body > footer'
	  ];
	  var elements = document.querySelectorAll(selectors.join(', '));
	  nodeListForEach(elements, function ($elem) {
	    var value = $elem.getAttribute('aria-hidden');
	    $elem.setAttribute('aria-hidden', 'true');
	    resetElementsFunctionList.push(function () {
	      if (value) {
	        $elem.setAttribute('aria-hidden', value);
	      } else {
	        $elem.removeAttribute('aria-hidden');
	      }
	    });
	  });
	  //
	  setupFocusHandlerAndFocusDialog();
	  setupKeydownHandler();
	  preventMobileScrollWhileAllowingPinchZoom();

	  function close () {
	    while (resetElementsFunctionList.length > 0) {
	      var fn = resetElementsFunctionList.shift();
	      fn();
	    }
	  }

	  function closeAndInform () {
	    closeCallbacks.forEach(function (fn) { fn(); });
	    close();
	  }

	  function setupFocusHandlerAndFocusDialog () {
	    function keepFocus (event) {
	      var modalFocus = document.getElementById('hmrc-timeout-dialog');
	      if (modalFocus) {
	        if (event.target !== modalFocus && !modalFocus.contains(event.target)) {
	          event.stopPropagation();
	          modalFocus.focus();
	        }
	      }
	    }

	    var elemToFocusOnReset = document.activeElement;
	    $dialog.focus();

	    document.addEventListener('focus', keepFocus, true);

	    resetElementsFunctionList.push(function () {
	      document.removeEventListener('focus', keepFocus);
	      elemToFocusOnReset.focus();
	    });
	  }

	  function setupKeydownHandler () {
	    function keydownListener (e) {
	      if (e.keyCode === 27) {
	        closeAndInform();
	      }
	    }

	    document.addEventListener('keydown', keydownListener);

	    resetElementsFunctionList.push(function () {
	      document.removeEventListener('keydown', keydownListener);
	    });
	  }

	  function preventMobileScrollWhileAllowingPinchZoom () {
	    function handleTouch (e) {
	      var touches = e.touches || e.changedTouches || [];

	      if (touches.length === 1) {
	        e.preventDefault();
	      }
	    }

	    document.addEventListener('touchmove', handleTouch, true);

	    resetElementsFunctionList.push(function () {
	      document.removeEventListener('touchmove', handleTouch, true);
	    });
	  }

	  function createSetterFunctionForAttributeOfDialog (attributeName) {
	    return function (value) {
	      if (value) {
	        $dialog.setAttribute(attributeName, value);
	      } else {
	        $dialog.removeAttribute(attributeName);
	      }
	    }
	  }

	  return {
	    closeDialog: function () {
	      close();
	    },
	    setAriaLive: createSetterFunctionForAttributeOfDialog('aria-live'),
	    setAriaLabelledBy: createSetterFunctionForAttributeOfDialog('aria-labelledby'),
	    addCloseHandler: function (closeHandler) {
	      closeCallbacks.push(closeHandler);
	    }
	  }
	}

	var dialog = { displayDialog: displayDialog };

	function ValidateInput ($module) {
	}

	ValidateInput.int = function (stringToValidate) {
	  var parsedInt = parseInt(stringToValidate, 10);
	  return isNaN(parsedInt) ? undefined : parsedInt
	};

	ValidateInput.string = function (stringToValidate) {
	  return stringToValidate && (('' + stringToValidate) || undefined)
	};

	function RedirectHelper () {}

	RedirectHelper.redirectToUrl = function (url) {
	  // This exists to make redirects more testable
	  window.location.href = url;
	};

	// TODO: rewruite this to follow govuk-frontend's protoytpe module pattern
	function TimeoutDialog ($module) {
	  var options = {};
	  var settings = {};
	  var cleanupFunctions = [];

	  function init () {
	    var validate = ValidateInput;

	    function lookupData (key) {
	      return ($module.attributes.getNamedItem(key) || {}).value
	    }

	    var localisedDefaults = validate.string(lookupData('data-language')) === 'cy' ? {
	      title: undefined,
	      message: 'Er eich diogelwch, byddwn yn eich allgofnodi cyn pen',
	      keepAliveButtonText: 'Parhau i fod wedi’ch mewngofnodi',
	      signOutButtonText: 'Allgofnodi',
	      properties: {
	        minutes: 'funud',
	        minute: 'funud',
	        seconds: 'eiliad',
	        second: 'eiliad'
	      }
	    } : {
	      title: undefined,
	      message: 'For your security, we will sign you out in',
	      keepAliveButtonText: 'Stay signed in',
	      signOutButtonText: 'Sign out',
	      properties: {
	        minutes: 'minutes',
	        minute: 'minute',
	        seconds: 'seconds',
	        second: 'second'
	      }
	    };

	    options = {
	      timeout: validate.int(lookupData('data-timeout')),
	      countdown: validate.int(lookupData('data-countdown')),
	      keepAliveUrl: validate.string(lookupData('data-keep-alive-url')),
	      signOutUrl: validate.string(lookupData('data-sign-out-url')),
	      title: validate.string(lookupData('data-title')),
	      message: validate.string(lookupData('data-message')),
	      messageSuffix: validate.string(lookupData('data-message-suffix')),
	      keepAliveButtonText: validate.string(
	        lookupData('data-keep-alive-button-text')
	      ),
	      signOutButtonText: validate.string(
	        lookupData('data-sign-out-button-text')
	      )
	    };

	    validateInput(options);
	    settings = mergeOptionsWithDefaults(options, localisedDefaults);
	    setupDialogTimer();
	  }

	  function validateInput (config) {
	    var requiredConfig = ['timeout', 'countdown', 'keepAliveUrl', 'signOutUrl'];
	    var missingRequiredConfig = [];

	    requiredConfig.forEach(function (item) {
	      if (!config.hasOwnProperty(item) || !config[item]) {
	        missingRequiredConfig.push('data-' + item.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase());
	      }
	    });

	    if (missingRequiredConfig.length > 0) {
	      throw new Error(
	        'Missing config item(s): [' + missingRequiredConfig.join(', ') + ']'
	      )
	    }
	  }

	  function mergeOptionsWithDefaults (options, localisedDefaults) {
	    var clone = Object.assign({}, options);

	    Object.keys(localisedDefaults).forEach(function (key) {
	      if (typeof clone[key] === 'object') {
	        clone[key] = mergeOptionsWithDefaults(
	          options[key],
	          localisedDefaults[key]
	        );
	      }
	      if (clone[key] === undefined || clone[key] === '') {
	        clone[key] = localisedDefaults[key];
	      }
	    });

	    return clone
	  }

	  function setupDialogTimer () {
	    settings.signout_time = getDateNow() + settings.timeout * 1000;

	    var timeout = window.setTimeout(function () {
	      setupDialog();
	    }, (settings.timeout - settings.countdown) * 1000);

	    cleanupFunctions.push(function () {
	      window.clearTimeout(timeout);
	    });
	  }

	  function setupDialog () {
	    var $element = utils.generateDomElementFromString('<div>');

	    if (settings.title) {
	      var $tmp = utils.generateDomElementFromStringAndAppendText(
	        '<h1 class="govuk-heading-m push--top">',
	        settings.title
	      );
	      $element.appendChild($tmp);
	    }

	    var $countdownElement = utils.generateDomElementFromString(
	      '<span id="hmrc-timeout-countdown" class="hmrc-timeout-dialog__countdown">'
	    );

	    var $timeoutMessage = utils.generateDomElementFromStringAndAppendText(
	      '<p id="hmrc-timeout-message" class="govuk-body hmrc-timeout-dialog__message" role="text">',
	      settings.message
	    );
	    $timeoutMessage.appendChild(document.createTextNode(' '));
	    $timeoutMessage.appendChild($countdownElement);
	    $timeoutMessage.appendChild(document.createTextNode('.'));
	    if (settings.messageSuffix) {
	      $timeoutMessage.appendChild(document.createTextNode(' ' + settings.messageSuffix));
	    }

	    var $staySignedInButton = utils.generateDomElementFromStringAndAppendText(
	      '<button id="hmrc-timeout-keep-signin-btn" class="govuk-button">',
	      settings.keepAliveButtonText
	    );
	    var $signOutButton = utils.generateDomElementFromStringAndAppendText(
	      '<a id="hmrc-timeout-sign-out-link" class="govuk-link hmrc-timeout-dialog__link">',
	      settings.signOutButtonText
	    );

	    $staySignedInButton.addEventListener('click', keepAliveAndClose);
	    $signOutButton.addEventListener('click', signOut);
	    $signOutButton.setAttribute('href', settings.signOutUrl);

	    $element.appendChild($timeoutMessage);
	    $element.appendChild($staySignedInButton);
	    $element.appendChild(document.createTextNode(' '));
	    $element.appendChild($signOutButton);

	    var dialogControl = dialog.displayDialog($element);

	    cleanupFunctions.push(function () {
	      dialogControl.closeDialog();
	    });

	    dialogControl.addCloseHandler(keepAliveAndClose);

	    dialogControl.setAriaLabelledBy('hmrc-timeout-message');
	    if (getSecondsRemaining() > 60) {
	      dialogControl.setAriaLive('polite');
	    }

	    startCountdown($countdownElement, dialogControl);
	  }

	  function getSecondsRemaining () {
	    return Math.floor((settings.signout_time - getDateNow()) / 1000)
	  }

	  function startCountdown ($countdownElement, dialogControl) {
	    function updateCountdown (counter, $countdownElement) {
	      var message;
	      if (counter === 60) {
	        dialogControl.setAriaLive();
	      }
	      if (counter < 60) {
	        message = counter + ' ' + settings.properties[counter !== 1 ? 'seconds' : 'second'];
	      } else {
	        var minutes = Math.ceil(counter / 60);
	        message = minutes + ' ' + settings.properties[minutes === 1 ? 'minute' : 'minutes'];
	      }
	      $countdownElement.innerText = message;
	    }

	    function runUpdate () {
	      var counter = getSecondsRemaining();
	      updateCountdown(counter, $countdownElement);
	      if (counter <= 0) {
	        signOut();
	      }
	    }

	    var countdown = window.setInterval(runUpdate, 1000);
	    cleanupFunctions.push(function () {
	      window.clearInterval(countdown);
	    });
	    runUpdate();
	  }

	  function keepAliveAndClose () {
	    cleanup();
	    setupDialogTimer();
	    utils.ajaxGet(settings.keepAliveUrl, function () { });
	  }

	  function getDateNow () {
	    return Date.now()
	  }

	  function signOut () {
	    RedirectHelper.redirectToUrl(settings.signOutUrl);
	  }

	  function cleanup () {
	    while (cleanupFunctions.length > 0) {
	      var fn = cleanupFunctions.shift();
	      fn();
	    }
	  }

	  return { init: init, cleanup: cleanup }
	}

	TimeoutDialog.dialog = dialog;
	TimeoutDialog.redirectHelper = RedirectHelper;
	TimeoutDialog.utils = utils;

	return TimeoutDialog;

})));
