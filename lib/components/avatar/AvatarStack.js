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
  _box = _interopRequireDefault(require('../box')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  AvatarStack = (function(e) {
    function t() {
      return (
        (0, _classCallCheck2.default)(this, t),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(t).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(t, e),
      (0, _createClass2.default)(t, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              i = e.direction,
              a = e.displayMax,
              l = e.inverse,
              u = e.onOverflowClick,
              s = e.size,
              o = (0, _objectWithoutProperties2.default)(e, [
                'children',
                'className',
                'direction',
                'displayMax',
                'inverse',
                'onOverflowClick',
                'size',
              ]),
              n = (0, _classnames.default)(
                _theme.default.stack,
                _theme.default[i],
                _theme.default['is-'.concat(s)],
                l ? [_theme.default.light] : [_theme.default.dark],
                r,
              ),
              c = 0 < a ? t.slice(0, a) : t,
              p = t.length - a;
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ 'data-teamleader-ui': 'avatar-stack', className: n }, o),
              0 < p &&
                _react.default.createElement(
                  'div',
                  {
                    className: (0, _classnames.default)(
                      _uiUtilities.default['reset-font-smoothing'],
                      _theme.default.overflow,
                    ),
                    onClick: u,
                  },
                  '+'.concat(p),
                ),
              c.map(function(e, t) {
                return (0, _react.cloneElement)(e, (0, _objectSpread2.default)({ key: t }, e.props, { size: s }));
              }),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
AvatarStack.defaultProps = { direction: 'horizontal', displayMax: 0, inverse: !1, size: 'medium' };
var _default = AvatarStack;
exports.default = _default;
