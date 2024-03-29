(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
	(global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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

	var getOwnPropertyDescriptor = {

	};

	return getOwnPropertyDescriptor;

})));
