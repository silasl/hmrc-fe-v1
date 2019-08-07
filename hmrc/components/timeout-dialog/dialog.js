(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('HMRCFrontend', factory) :
  (global.HMRCFrontend = factory());
}(this, (function () { 'use strict';

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

  return dialog;

})));
