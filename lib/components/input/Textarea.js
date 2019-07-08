'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
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
  _InputBase = _interopRequireDefault(require('./InputBase')),
  _box = _interopRequireWildcard(require('../box')),
  _validationText = _interopRequireDefault(require('../validationText')),
  _theme = _interopRequireDefault(require('./theme.css')),
  Textarea = (function(e) {
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
              a = r.error,
              u = r.helpText,
              i = r.inverse,
              l = r.success,
              s = r.warning,
              n = (0, _objectWithoutProperties2.default)(r, [
                'className',
                'error',
                'helpText',
                'inverse',
                'success',
                'warning',
              ]),
              o = (0, _classnames.default)(
                _theme.default.wrapper,
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['has-error'], a),
                (0, _defineProperty2.default)(e, _theme.default['has-success'], l),
                (0, _defineProperty2.default)(e, _theme.default['has-warning'], s),
                e),
                t,
              ),
              p = (0, _box.pickBoxProps)(n),
              _ = (0, _objectSpread2.default)({ inverse: i }, (0, _box.omitBoxProps)(n));
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: o }, p),
              _react.default.createElement(
                _InputBase.default,
                (0, _extends2.default)({ className: _theme.default.textarea, element: 'textarea' }, _),
              ),
              _react.default.createElement(_validationText.default, {
                error: a,
                help: u,
                inverse: i,
                success: l,
                warning: s,
              }),
            );
          },
        },
      ]),
      r
    );
  })(_react.PureComponent);
Textarea.defaultProps = { inverse: !1 };
var _default = Textarea;
exports.default = _default;
