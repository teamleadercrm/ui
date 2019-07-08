'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getMaxHeight = exports.MAX_HEIGHT_DEFAULT = void 0;
var MAX_HEIGHT_DEFAULT = 240;
exports.MAX_HEIGHT_DEFAULT = MAX_HEIGHT_DEFAULT;

var getMaxHeight = function getMaxHeight(fullHeight, maxHeight) {
  if (!fullHeight && maxHeight > MAX_HEIGHT_DEFAULT) {
    return MAX_HEIGHT_DEFAULT;
  }

  return maxHeight;
};

exports.getMaxHeight = getMaxHeight;
