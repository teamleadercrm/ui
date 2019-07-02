'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _react = _interopRequireDefault(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../box')),
  _typography = require('../typography'),
  _theme = _interopRequireDefault(require('./theme.css')),
  MenuTitle = function(e) {
    var t = e.children,
      r = (0, _objectWithoutProperties2.default)(e, ['children']);
    return _react.default.createElement(
      _box.default,
      (0, _extends2.default)({}, r, {
        alignItems: 'center',
        className: _theme.default.title,
        'data-teamleader-ui': 'menu-title',
        display: 'flex',
        paddingHorizontal: 3,
      }),
      _react.default.createElement(_typography.Heading4, { color: 'teal' }, t),
    );
  },
  _default = MenuTitle;
exports.default = _default;
