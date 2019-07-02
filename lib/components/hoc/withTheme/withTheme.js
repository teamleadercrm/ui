'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _constants = require('../../../constants'),
  withTheme = function(n) {
    return function(l) {
      var e = (function(e) {
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
                  r = e.color,
                  t = e.size,
                  i = e.tint,
                  u = e.className,
                  a = (0, _objectWithoutProperties2.default)(e, ['color', 'size', 'tint', 'className']),
                  s = (0, _classnames.default)(n['is-'.concat(r)], n['is-'.concat(t)], n['is-'.concat(i)], u);
                return _react.default.createElement(l, (0, _extends2.default)({ className: s }, a));
              },
            },
          ]),
          r
        );
      })(_react.PureComponent);
      return (
        (e.defaultProps = { color: 'neutral', size: 'medium', tint: 'normal' }),
        (e.displayName = 'WithTheme('.concat(l.displayName || l.name || 'Component', ')')),
        e
      );
    };
  },
  _default = withTheme;
exports.default = _default;
