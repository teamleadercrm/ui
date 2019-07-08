'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.getMaxHeight = exports.MAX_HEIGHT_DEFAULT = void 0);
var MAX_HEIGHT_DEFAULT = 240;
exports.MAX_HEIGHT_DEFAULT = MAX_HEIGHT_DEFAULT;
var getMaxHeight = function(e, t) {
  return !e && MAX_HEIGHT_DEFAULT < t ? MAX_HEIGHT_DEFAULT : t;
};
exports.getMaxHeight = getMaxHeight;
