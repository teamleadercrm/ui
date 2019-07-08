'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'Box', {
  enumerable: true,
  get: function get() {
    return _Box.default;
  },
});
Object.defineProperty(exports, 'boxProps', {
  enumerable: true,
  get: function get() {
    return _boxProps.default;
  },
});
Object.defineProperty(exports, 'omitBoxProps', {
  enumerable: true,
  get: function get() {
    return _boxProps.omitBoxProps;
  },
});
Object.defineProperty(exports, 'pickBoxProps', {
  enumerable: true,
  get: function get() {
    return _boxProps.pickBoxProps;
  },
});
exports.default = void 0;

var _Box = _interopRequireDefault(require('./Box'));

var _boxProps = _interopRequireWildcard(require('./boxProps'));

var _default = _Box.default;
exports.default = _default;
