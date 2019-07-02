'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.textFactory = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _box = _interopRequireDefault(require('../box')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _constants = require('../../constants'),
  _theme = _interopRequireDefault(require('./theme.css')),
  factory = function(o, p, c) {
    var e = (function(e) {
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
                u = e.color,
                i = e.element,
                a = e.tint,
                l = (0, _objectWithoutProperties2.default)(e, ['children', 'className', 'color', 'element', 'tint']),
                s = (0, _classnames.default)(
                  _theme.default[o],
                  _theme.default[p],
                  _theme.default[u],
                  _theme.default[a],
                  r,
                ),
                n = i || c;
              return _react.default.createElement(
                _box.default,
                (0, _extends2.default)({ className: s, 'data-teamleader-ui': o, element: n }, l),
                t,
              );
            },
          },
        ]),
        t
      );
    })(_react.PureComponent);
    return (e.defaultProps = { element: null, tint: 'darkest' }), e;
  };
exports.textFactory = factory;
