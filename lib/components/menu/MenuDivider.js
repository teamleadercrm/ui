'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _react = _interopRequireDefault(require('react')),
  _theme = _interopRequireDefault(require('./theme.css')),
  MenuDivider = function() {
    return _react.default.createElement('hr', {
      'data-teamleader-ui': 'menu-divider',
      className: _theme.default.divider,
    });
  },
  _default = MenuDivider;
exports.default = _default;
