'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.overrideComponentTypeChecker = overrideComponentTypeChecker),
  (exports.defaultChecker = defaultChecker),
  (exports.default = isComponentOfType);
var customChecker,
  _react = _interopRequireDefault(require('react'));
function overrideComponentTypeChecker(e) {
  customChecker = e;
}
function defaultChecker(e, r) {
  return 'production' !== process.env.NODE_ENV && (e = _react.default.createElement(e).type), r && r.type === e;
}
function isComponentOfType(e, r) {
  return customChecker ? customChecker(e, r) : defaultChecker(e, r);
}
