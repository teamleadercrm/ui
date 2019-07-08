'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _toConsumableArray2 = _interopRequireDefault(require('@babel/runtime/helpers/toConsumableArray')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _uiIcons = require('@teamleader/ui-icons'),
  _icon = _interopRequireDefault(require('../icon')),
  _SingleLineInputBase = _interopRequireDefault(require('./SingleLineInputBase')),
  _theme = _interopRequireDefault(require('./theme.css')),
  SpinnerControls = (function(e) {
    function t() {
      return (
        (0, _classCallCheck2.default)(this, t),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(t).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(t, e),
      (0, _createClass2.default)(t, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.inverse,
              r = e.spinnerUpProps,
              a = e.spinnerDownProps,
              i = {
                color: t ? 'teal' : 'neutral',
                element: 'button',
                tabIndex: '-1',
                tint: t ? 'lightest' : 'darkest',
                type: 'button',
              };
            return _react.default.createElement(
              'div',
              { className: _theme.default.spinner },
              _react.default.createElement(
                _icon.default,
                (0, _extends2.default)({ className: _theme.default['spinner-up'] }, r, i),
                _react.default.createElement(_uiIcons.IconChevronUpSmallOutline, null),
              ),
              _react.default.createElement(
                _icon.default,
                (0, _extends2.default)({ className: _theme.default['spinner-down'] }, a, i),
                _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null),
              ),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent),
  NumericInput = (function(e) {
    function i() {
      var e, u;
      (0, _classCallCheck2.default)(this, i);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (u = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'state', { value: '' }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'handleOnChange', function(e) {
          u.setState({ value: u.parseValue(e.currentTarget.value) });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'updateStep', function(e) {
          var t = u.props,
            r = t.onChange,
            a = t.step,
            i = u.toNumber(u.state.value || 0),
            n = u.parseValue(i + a * e);
          n !== i && (u.setState({ value: n }), r && r(null, n));
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'parseValue', function(e) {
          return u.bindToMinMax(u.toNumber(e));
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'toNumber', function(e) {
          var t = parseFloat(e);
          return (!isNaN(t) && isFinite(t)) || (t = 0), t;
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'bindToMinMax', function(e) {
          var t = u.props,
            r = t.min,
            a = t.max;
          return Math.min(Math.max(e, r), a);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'handleIncreaseValue', function() {
          u.updateStep(1);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'handleDecreaseValue', function() {
          u.updateStep(-1);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'isMaxReached', function() {
          return u.state.value >= u.props.max;
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'isMinReached', function() {
          return u.state.value <= u.props.min;
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'getSuffixWithSpinner', function() {
          return [].concat((0, _toConsumableArray2.default)(u.props.suffix), [
            _react.default.createElement(SpinnerControls, {
              inverse: u.props.inverse,
              spinnerUpProps: { onClick: u.handleIncreaseValue, disabled: u.isMaxReached() },
              spinnerDownProps: { onClick: u.handleDecreaseValue, disabled: u.isMinReached() },
            }),
          ]);
        }),
        u
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(
        i,
        [
          {
            key: 'render',
            value: function() {
              var t = this,
                e = this.props,
                r = e.spinner,
                a = e.suffix,
                i = e.onChange,
                n = (0, _objectWithoutProperties2.default)(e, ['spinner', 'suffix', 'onChange']);
              return _react.default.createElement(
                _SingleLineInputBase.default,
                (0, _extends2.default)(
                  {
                    type: 'number',
                    value: this.state.value,
                    suffix: r ? this.getSuffixWithSpinner() : a,
                    onChange: function(e) {
                      t.handleOnChange(e), i && i(e, e.currentTarget.value);
                    },
                  },
                  n,
                ),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function(e, t) {
              if (void 0 !== e.value) {
                var r = e.value || '';
                if (r !== t.value) return { value: r };
              }
              return null;
            },
          },
        ],
      ),
      i
    );
  })(_react.PureComponent);
NumericInput.defaultProps = {
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  step: 1,
  suffix: [],
  spinner: !0,
};
var _default = NumericInput;
exports.default = _default;
