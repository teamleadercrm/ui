'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.elementIsDark = exports.isElementOverflowingY = exports.isElementOverflowingX = exports.getViewport = void 0);
var getViewport = function() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth,
  };
};
exports.getViewport = getViewport;
var isElementOverflowingX = function(e) {
  return e.clientWidth < e.scrollWidth;
};
exports.isElementOverflowingX = isElementOverflowingX;
var isElementOverflowingY = function(e) {
  return e.clientHeight < e.scrollHeight;
};
exports.isElementOverflowingY = isElementOverflowingY;
var elementIsDark = function(e, t) {
  return !!['white', 'neutral'].includes(e) && t;
};
exports.elementIsDark = elementIsDark;
