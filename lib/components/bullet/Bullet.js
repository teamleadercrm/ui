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
  Bullet = (function(e) {
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
              t = r.className,
              u = r.color,
              l = r.size,
              i = r.borderColor,
              a = r.borderTint,
              o = (0, _objectWithoutProperties2.default)(r, [
                'className',
                'color',
                'size',
                'borderColor',
                'borderTint',
              ]),
              s = (0, _classnames.default)(
                _theme.default.bullet,
                _theme.default[u],
                _theme.default[l],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['border-'.concat(i, '-').concat(a)], i && a),
                (0, _defineProperty2.default)(e, _theme.default['border-'.concat(i)], i && !a),
                e),
                t,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ 'data-teamleader-ui': 'bullet', className: s, element: 'span' }, o),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
Bullet.defaultProps = { color: 'neutral', size: 'medium' };
var _default = Bullet;
exports.default = _default;
