'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.sizesWithout = exports.SIZES = exports.FULLSCREEN = exports.LARGE = exports.MEDIUM = exports.SMALL = exports.TINY = void 0;

var _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray'));

var _lodash = _interopRequireDefault(require('lodash.without'));

var TINY = 'tiny';
exports.TINY = TINY;
var SMALL = 'small';
exports.SMALL = SMALL;
var MEDIUM = 'medium';
exports.MEDIUM = MEDIUM;
var LARGE = 'large';
exports.LARGE = LARGE;
var FULLSCREEN = 'fullscreen';
exports.FULLSCREEN = FULLSCREEN;
var SIZES = [TINY, SMALL, MEDIUM, LARGE, FULLSCREEN];
exports.SIZES = SIZES;

var sizesWithout = function sizesWithout(sizesToExclude) {
  return _lodash.default.apply(void 0, [SIZES].concat((0, _toConsumableArray2.default)(sizesToExclude)));
};

exports.sizesWithout = sizesWithout;
