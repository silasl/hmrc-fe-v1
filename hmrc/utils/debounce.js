(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define('HMRCFrontend', ['exports'], factory) :
  (factory((global.HMRCFrontend = {})));
}(this, (function (exports) { 'use strict';

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce (func, wait, immediate) {
    var timeout;

    return function () {
      var context = this;
      var args = arguments;

      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    }
  }

  exports.debounce = debounce;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
