'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../box')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Counter = (function(e) {
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
            var e,
              r = this.props,
              t = r.children,
              u = r.className,
              i = r.color,
              a = r.count,
              l = r.maxCount,
              o = r.size,
              n = r.borderColor,
              s = r.borderTint,
              p = (0, _objectWithoutProperties2.default)(r, [
                'children',
                'className',
                'color',
                'count',
                'maxCount',
                'size',
                'borderColor',
                'borderTint',
              ]),
              _ = (0, _classnames.default)(
                _uiUtilities.default['reset-font-smoothing'],
                _theme.default.counter,
                _theme.default[i],
                _theme.default[o],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['border-'.concat(n, '-').concat(s)], n && s),
                (0, _defineProperty2.default)(e, _theme.default['border-'.concat(n)], n && !s),
                e),
                u,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: _, element: 'span' }, p, { 'data-teamleader-ui': 'counter' }),
              l < a ? ''.concat(l, '+') : a,
              ' ',
              t,
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
Counter.defaultProps = { color: 'neutral', size: 'medium' };
var _default = Counter;
exports.default = _default;
