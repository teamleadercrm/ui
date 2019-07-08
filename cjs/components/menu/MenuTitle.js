'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _typography = require('../typography');

var _theme = _interopRequireDefault(require('./theme.css'));

var MenuTitle = function MenuTitle(_ref) {
  var children = _ref.children,
    others = (0, _objectWithoutProperties2.default)(_ref, ['children']);
  return _react.default.createElement(
    _box.default,
    (0, _extends2.default)({}, others, {
      alignItems: 'center',
      className: _theme.default['title'],
      'data-teamleader-ui': 'menu-title',
      display: 'flex',
      paddingHorizontal: 3,
    }),
    _react.default.createElement(
      _typography.Heading4,
      {
        color: 'teal',
      },
      children,
    ),
  );
};

var _default = MenuTitle;
exports.default = _default;
