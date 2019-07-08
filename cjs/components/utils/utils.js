'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.elementIsDark = exports.isElementOverflowingY = exports.isElementOverflowingX = exports.getViewport = void 0;

var getViewport = function getViewport() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth,
  };
};

exports.getViewport = getViewport;

var isElementOverflowingX = function isElementOverflowingX(element) {
  return element.clientWidth < element.scrollWidth;
};

exports.isElementOverflowingX = isElementOverflowingX;

var isElementOverflowingY = function isElementOverflowingY(element) {
  return element.clientHeight < element.scrollHeight;
};

exports.isElementOverflowingY = isElementOverflowingY;

var elementIsDark = function elementIsDark(color, dark) {
  var lightColors = ['white', 'neutral'];

  if (lightColors.includes(color)) {
    return dark;
  }

  return false;
};

exports.elementIsDark = elementIsDark;
