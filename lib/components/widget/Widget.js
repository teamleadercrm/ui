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
  _Body = _interopRequireDefault(require('./Body')),
  _Footer = _interopRequireDefault(require('./Footer')),
  _Header = _interopRequireDefault(require('./Header')),
  _island = require('../island'),
  PADDINGS = { small: 3, medium: 4, large: 5 },
  Widget = (function(e) {
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
              t = e.size,
              i = (0, _objectWithoutProperties2.default)(e, ['children', 'size']);
            return _react.default.createElement(
              _island.IslandGroup,
              (0, _extends2.default)({ direction: 'vertical' }, i),
              _react.default.Children.map(r, function(e) {
                return _react.default.cloneElement(e, (0, _objectSpread2.default)({ padding: PADDINGS[t] }, e.props));
              }),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
(Widget.defaultProps = { size: 'medium' }),
  (Widget.Body = _Body.default),
  (Widget.Footer = _Footer.default),
  (Widget.Header = _Header.default);
var _default = Widget;
exports.default = _default;
