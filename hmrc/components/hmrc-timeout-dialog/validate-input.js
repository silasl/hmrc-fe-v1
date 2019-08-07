(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
  (global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

  function ValidateInput ($module) {
  }

  ValidateInput.int = function (stringToValidate) {
    var parsedInt = parseInt(stringToValidate, 10);
    return isNaN(parsedInt) ? undefined : parsedInt
  };

  ValidateInput.string = function (stringToValidate) {
    return stringToValidate && (('' + stringToValidate) || undefined)
  };

  return ValidateInput;

})));
