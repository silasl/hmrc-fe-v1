(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
	(global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	(function(undefined) {

	  // Detection from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/NodeList/prototype/forEach/detect.js
	  var detect = (
	    'forEach' in NodeList.prototype
	  );

	  if (detect) return

	  // Polyfill from https://github.com/Financial-Times/polyfill-library/blob/987630a085e29226da16b5dc542042c687560191/polyfills/NodeList/prototype/forEach/polyfill.js
	  NodeList.prototype.forEach = Array.prototype.forEach;
	}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof commonjsGlobal && commonjsGlobal || {});

	var forEach = {

	};

	return forEach;

})));
