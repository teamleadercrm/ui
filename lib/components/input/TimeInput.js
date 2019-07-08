'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _reactInputMask = _interopRequireDefault(require('react-input-mask')),
  _icon = _interopRequireDefault(require('../icon')),
  _SingleLineInputBase = _interopRequireDefault(require('./SingleLineInputBase')),
  _uiIcons = require('@teamleader/ui-icons'),
  isValidTime = function(e) {
    return RegExp('([0-1][0-9]|[2][0-3]):([0-5][0-9])').test(e);
  },
  TimeInput = (function(e) {
    function u() {
      var e, r;
      (0, _classCallCheck2.default)(this, u);
      for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
      return (
        (r = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(u)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'beforeMaskedValueChange', function(
          e,
          r,
        ) {
          var t = e.value,
            i = e.selection,
            a = r.value;
          return isValidTime(t) ? { value: t, selection: i } : { value: a, selection: i };
        }),
        r
      );
    }
    return (
      (0, _inherits2.default)(u, e),
      (0, _createClass2.default)(u, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.disabled,
              t = e.readOnly;
            return _react.default.createElement(
              _reactInputMask.default,
              (0, _extends2.default)({}, this.props, {
                mask: '99:99',
                maskChar: '0',
                beforeMaskedValueChange: this.beforeMaskedValueChange,
              }),
              function(e) {
                return _react.default.createElement(
                  _SingleLineInputBase.default,
                  (0, _extends2.default)({}, e, {
                    autoComplete: 'off',
                    readOnly: t,
                    disabled: r,
                    prefix: _react.default.createElement(
                      _icon.default,
                      { color: 'neutral', tint: 'darkest' },
                      _react.default.createElement(_uiIcons.IconTimerSmallOutline, null),
                    ),
                  }),
                );
              },
            );
          },
        },
      ]),
      u
    );
  })(_react.PureComponent),
  _default = TimeInput;
exports.default = _default;
