(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
  (global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

  function RedirectHelper () {}

  RedirectHelper.redirectToUrl = function (url) {
    // This exists to make redirects more testable
    window.location.href = url;
  };

  return RedirectHelper;

})));
