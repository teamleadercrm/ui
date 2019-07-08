'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.sizesWithout = exports.SIZES = exports.FULLSCREEN = exports.LARGE = exports.MEDIUM = exports.SMALL = exports.TINY = void 0);
var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray')),
  _lodash = _interopRequireDefault(require('lodash.without')),
  TINY = 'tiny',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  FULLSCREEN = 'fullscreen',
  SIZES = [
    (exports.TINY = TINY),
    (exports.SMALL = SMALL),
    (exports.MEDIUM = MEDIUM),
    (exports.LARGE = LARGE),
    (exports.FULLSCREEN = FULLSCREEN),
  ];
exports.SIZES = SIZES;
var sizesWithout = function(e) {
  return _lodash.default.apply(void 0, [SIZES].concat((0, _toConsumableArray2.default)(e)));
};
exports.sizesWithout = sizesWithout;
