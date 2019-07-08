'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _theme = _interopRequireDefault(require('./theme.css'));

var MenuDivider = function MenuDivider() {
  return _react.default.createElement('hr', {
    'data-teamleader-ui': 'menu-divider',
    className: _theme.default['divider'],
  });
};

var _default = MenuDivider;
exports.default = _default;
