(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
	(factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var Document$1 = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		factory();
	}(commonjsGlobal, (function () {
	(function(undefined) {

	// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
	var detect = ("Document" in this);

	if (detect) return

	// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
	if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

		if (this.HTMLDocument) { // IE8

			// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
			this.Document = this.HTMLDocument;

		} else {

			// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
			this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
			this.Document.prototype = document;
		}
	}


	})
	.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	})));
	});

	var Element_1 = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		factory();
	}(commonjsGlobal, (function () {
	(function(undefined) {

	// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Document/detect.js
	var detect = ("Document" in this);

	if (detect) return

	// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Document&flags=always
	if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {

		if (this.HTMLDocument) { // IE8

			// HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
			this.Document = this.HTMLDocument;

		} else {

			// Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
			this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
			this.Document.prototype = document;
		}
	}


	})
	.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	(function(undefined) {

	// Detection from https://github.com/Financial-Times/polyfill-service/blob/master/packages/polyfill-library/polyfills/Element/detect.js
	var detect = ('Element' in this && 'HTMLElement' in this);

	if (detect) return

	// Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Element&flags=always
	(function () {

		// IE8
		if (window.Element && !window.HTMLElement) {
			window.HTMLElement = window.Element;
			return;
		}

		// create Element constructor
		window.Element = window.HTMLElement = new Function('return function Element() {}')();

		// generate sandboxed iframe
		var vbody = document.appendChild(document.createElement('body'));
		var frame = vbody.appendChild(document.createElement('iframe'));

		// use sandboxed iframe to replicate Element functionality
		var frameDocument = frame.contentWindow.document;
		var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
		var cache = {};

		// polyfill Element.prototype on an element
		var shiv = function (element, deep) {
			var
			childNodes = element.childNodes || [],
			index = -1,
			key, value, childNode;

			if (element.nodeType === 1 && element.constructor !== Element) {
				element.constructor = Element;

				for (key in cache) {
					value = cache[key];
					element[key] = value;
				}
			}

			while (childNode = deep && childNodes[++index]) {
				shiv(childNode, deep);
			}

			return element;
		};

		var elements = document.getElementsByTagName('*');
		var nativeCreateElement = document.createElement;
		var interval;
		var loopLimit = 100;

		prototype.attachEvent('onpropertychange', function (event) {
			var
			propertyName = event.propertyName,
			nonValue = !cache.hasOwnProperty(propertyName),
			newValue = prototype[propertyName],
			oldValue = cache[propertyName],
			index = -1,
			element;

			while (element = elements[++index]) {
				if (element.nodeType === 1) {
					if (nonValue || element[propertyName] === oldValue) {
						element[propertyName] = newValue;
					}
				}
			}

			cache[propertyName] = newValue;
		});

		prototype.constructor = Element;

		if (!prototype.hasAttribute) {
			// <Element>.hasAttribute
			prototype.hasAttribute = function hasAttribute(name) {
				return this.getAttribute(name) !== null;
			};
		}

		// Apply Element prototype to the pre-existing DOM as soon as the body element appears.
		function bodyCheck() {
			if (!(loopLimit--)) clearTimeout(interval);
			if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
				shiv(document, true);
				if (interval && document.body.prototype) clearTimeout(interval);
				return (!!document.body.prototype);
			}
			return false;
		}
		if (!bodyCheck()) {
			document.onreadystatechange = bodyCheck;
			interval = setInterval(bodyCheck, 25);
		}

		// Apply to any new elements created after load
		document.createElement = function createElement(nodeName) {
			var element = nativeCreateElement(String(nodeName).toLowerCase());
			return shiv(element);
		};

		// remove sandboxed iframe
		document.removeChild(vbody);
	}());

	})
	.call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	})));
	});

	(function(undefined) {

	  // Detection from https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/document/querySelector/detect.js
	  var detect = (
	    'document' in this && 'querySelector' in this.document
	  );

	  if (detect) return

	  // Polyfill from https://cdn.polyfill.io/v2/polyfill.js?features=Event&flags=always
	  (function () {
	    var
	    head = document.getElementsByTagName('head')[0];

	    function getElementsByQuery(node, selector, one) {
	      var
	      generator = document.createElement('div'),
	      id = 'qsa' + String(Math.random()).slice(3),
	      style, elements;

	      generator.innerHTML = 'x<style>' + selector + '{qsa:' + id + ';}';

	      style = head.appendChild(generator.lastChild);

	      elements = getElements(node, selector, one, id);

	      head.removeChild(style);

	      return one ? elements[0] : elements;
	    }

	    function getElements(node, selector, one, id) {
	      var
	      validNode = /1|9/.test(node.nodeType),
	      childNodes = node.childNodes,
	      elements = [],
	      index = -1,
	      childNode;

	      if (validNode && node.currentStyle && node.currentStyle.qsa === id) {
	        if (elements.push(node) && one) {
	          return elements;
	        }
	      }

	      while (childNode = childNodes[++index]) {
	        elements = elements.concat(getElements(childNode, selector, one, id));

	        if (one && elements.length) {
	          return elements;
	        }
	      }

	      return elements;
	    }

	    Document.prototype.querySelector = Element.prototype.querySelector = function querySelectorAll(selector) {
	      return getElementsByQuery(this, selector, true);
	    };

	    Document.prototype.querySelectorAll = Element.prototype.querySelectorAll = function querySelectorAll(selector) {
	      return getElementsByQuery(this, selector, false);
	    };
	  }());
	}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

})));
