'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
Object.defineProperty(exports, 'events', {
  enumerable: true,
  get: function get() {
    return _events.default;
  },
});
exports.default = void 0;

var _events = _interopRequireDefault(require('./events.js'));

// import prefixer from './prefixer.js';
// import time from './time.js';
var _default = {
  events: _events.default,
}; // export {prefixer};
// export {time};

exports.default = _default;
