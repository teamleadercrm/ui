'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _box = require('../box'),
  _theme = _interopRequireDefault(require('./theme.css')),
  InputBase = (function(e) {
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
              t = r.bold,
              i = r.className,
              u = r.element,
              a = r.innerRef,
              l = r.inverse,
              s = r.size,
              o = (0, _objectWithoutProperties2.default)(r, [
                'bold',
                'className',
                'element',
                'innerRef',
                'inverse',
                'size',
              ]),
              n = (0, _classnames.default)(
                _theme.default.input,
                _theme.default['is-'.concat(s)],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-inverse'], l),
                (0, _defineProperty2.default)(e, _theme.default['is-bold'], t),
                e),
                i,
              ),
              p = (0, _box.omitBoxProps)(o),
              _ = (0, _objectSpread2.default)({ className: n, ref: a }, p);
            return _react.default.createElement(u, _);
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
InputBase.defaultProps = { inverse: !1, disabled: !1, element: 'input', readOnly: !1, size: 'medium' };
var _default = InputBase;
exports.default = _default;
