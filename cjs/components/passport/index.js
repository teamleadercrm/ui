'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'EmptyPassport', {
  enumerable: true,
  get: function get() {
    return _EmptyPassport.default;
  },
});
Object.defineProperty(exports, 'Passport', {
  enumerable: true,
  get: function get() {
    return _Passport.default;
  },
});
exports.default = void 0;

var _EmptyPassport = _interopRequireDefault(require('./EmptyPassport'));

var _Passport = _interopRequireDefault(require('./Passport'));

var _default = _Passport.default;
exports.default = _default;
