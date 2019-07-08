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
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _InputBase = _interopRequireDefault(require('./InputBase')),
  _box = _interopRequireWildcard(require('../box')),
  _validationText = _interopRequireDefault(require('../validationText')),
  _theme = _interopRequireDefault(require('./theme.css')),
  SingleLineInputBase = (function(e) {
    function u() {
      var e, t;
      (0, _classCallCheck2.default)(this, u);
      for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(u)).call.apply(e, [this].concat(a)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'state', { inputHasfocus: !1 }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleBlur', function(e) {
          t.setState({ inputHasfocus: !1 }), t.props.onBlur && t.props.onBlur(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleFocus', function(e) {
          t.setState({ inputHasfocus: !0 }), t.props.onFocus && t.props.onFocus(e);
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(u, e),
      (0, _createClass2.default)(u, [
        {
          key: 'renderOneOrMultipleElements',
          value: function(e) {
            return Array.isArray(e)
              ? e.map(function(e, t) {
                  return _react.default.cloneElement(e, { key: t });
                })
              : e;
          },
        },
        {
          key: 'render',
          value: function() {
            var e,
              t = this.props,
              r = t.className,
              a = t.connectedLeft,
              i = t.connectedRight,
              u = t.disabled,
              l = t.error,
              n = t.helpText,
              s = (t.onFocus, t.onBlur, t.prefix),
              o = t.inverse,
              d = t.readOnly,
              p = t.success,
              f = t.suffix,
              c = t.width,
              _ = t.warning,
              h = (0, _objectWithoutProperties2.default)(t, [
                'className',
                'connectedLeft',
                'connectedRight',
                'disabled',
                'error',
                'helpText',
                'onFocus',
                'onBlur',
                'prefix',
                'inverse',
                'readOnly',
                'success',
                'suffix',
                'width',
                'warning',
              ]),
              m = (0, _classnames.default)(
                _theme.default.wrapper,
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['has-focus'], this.state.inputHasfocus),
                (0, _defineProperty2.default)(e, _theme.default['has-error'], l),
                (0, _defineProperty2.default)(e, _theme.default['has-success'], p),
                (0, _defineProperty2.default)(e, _theme.default['has-warning'], _),
                (0, _defineProperty2.default)(e, _theme.default['has-connected-left'], a),
                (0, _defineProperty2.default)(e, _theme.default['has-connected-right'], i),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], u),
                (0, _defineProperty2.default)(e, _theme.default['is-inverse'], o),
                (0, _defineProperty2.default)(e, _theme.default['is-read-only'], d),
                e),
                r,
              ),
              b = (0, _box.pickBoxProps)(h),
              q = (0, _objectSpread2.default)(
                { disabled: u, inverse: o, onBlur: this.handleBlur, onFocus: this.handleFocus, readOnly: d },
                (0, _box.omitBoxProps)(h),
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: m }, b),
              _react.default.createElement(
                'div',
                { className: _theme.default['input-wrapper'] },
                a,
                _react.default.createElement(
                  'div',
                  { className: _theme.default['input-inner-wrapper'], style: { width: c, flex: c && '0 0 auto' } },
                  s &&
                    _react.default.createElement(
                      'div',
                      { className: _theme.default['prefix-wrapper'] },
                      this.renderOneOrMultipleElements(s),
                    ),
                  _react.default.createElement(_InputBase.default, q),
                  f &&
                    _react.default.createElement(
                      'div',
                      { className: _theme.default['suffix-wrapper'] },
                      this.renderOneOrMultipleElements(f),
                    ),
                ),
                i,
              ),
              _react.default.createElement(_validationText.default, {
                error: l,
                help: n,
                inverse: o,
                success: p,
                warning: _,
              }),
            );
          },
        },
      ]),
      u
    );
  })(_react.PureComponent),
  _default = SingleLineInputBase;
exports.default = _default;
