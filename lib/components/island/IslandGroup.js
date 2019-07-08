'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _box = _interopRequireWildcard(require('../box')),
  _theme = _interopRequireDefault(require('./theme.css')),
  IslandGroup = (function(e) {
    function r() {
      return (
        (0, _classCallCheck2.default)(this, r),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(r).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(r, e),
      (0, _createClass2.default)(r, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.children,
              t = e.className,
              i = e.color,
              u = e.dark,
              a = e.direction,
              l = e.size,
              o = (0, _objectWithoutProperties2.default)(e, [
                'children',
                'className',
                'color',
                'dark',
                'direction',
                'size',
              ]),
              s = (0, _box.pickBoxProps)(o),
              n = (0, _classnames.default)(_theme.default['direction-'.concat(a)], _theme.default['island-group'], t);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({}, s, { className: n }),
              _react.default.Children.map(r, function(e) {
                return _react.default.cloneElement(
                  e,
                  (0, _objectSpread2.default)({}, e.props, {
                    color: i || e.props.color,
                    dark: u || e.props.dark,
                    size: l || e.props.size,
                  }),
                );
              }),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
IslandGroup.defaultProps = { direction: 'horizontal' };
var _default = IslandGroup;
exports.default = _default;
