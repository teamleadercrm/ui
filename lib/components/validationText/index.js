'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  Object.defineProperty(exports, 'ErrorText', {
    enumerable: !0,
    get: function() {
      return _ErrorText.default;
    },
  }),
  Object.defineProperty(exports, 'HelpText', {
    enumerable: !0,
    get: function() {
      return _HelpText.default;
    },
  }),
  Object.defineProperty(exports, 'SuccessText', {
    enumerable: !0,
    get: function() {
      return _SuccessText.default;
    },
  }),
  Object.defineProperty(exports, 'WarningText', {
    enumerable: !0,
    get: function() {
      return _WarningText.default;
    },
  }),
  (exports.default = void 0);
var _ValidationText = _interopRequireDefault(require('./ValidationText')),
  _ErrorText = _interopRequireDefault(require('./ErrorText')),
  _HelpText = _interopRequireDefault(require('./HelpText')),
  _SuccessText = _interopRequireDefault(require('./SuccessText')),
  _WarningText = _interopRequireDefault(require('./WarningText')),
  _default = _ValidationText.default;
exports.default = _default;
