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
  _box = _interopRequireWildcard(require('../box')),
  _DayPickerInput = _interopRequireDefault(require('react-day-picker/DayPickerInput')),
  _icon = _interopRequireDefault(require('../icon')),
  _NavigationBar = _interopRequireDefault(require('./NavigationBar')),
  _WeekDay = _interopRequireDefault(require('./WeekDay')),
  _utils = require('./utils'),
  _index = require('react-day-picker/lib/src/index'),
  _uiIcons = require('@teamleader/ui-icons'),
  _validationText = _interopRequireDefault(require('../validationText')),
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  DatePickerInputRange = (function(e) {
    function i() {
      var e, R;
      (0, _classCallCheck2.default)(this, i);
      for (var t = arguments.length, a = new Array(t), r = 0; r < t; r++) a[r] = arguments[r];
      return (
        (R = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(a)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'state', {
          selectedStartDate: null,
          selectedEndDate: null,
          mouseEnteredEndDate: null,
          inputHasFocus: !1,
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'focusFrom', function() {
          R.timeout = setTimeout(function() {
            return R.startDate.getInput().focus();
          }, 100);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'focusTo', function() {
          R.timeout = setTimeout(function() {
            return R.endDate.getInput().focus();
          }, 0);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleFromBlur', function() {
          R.setState({ inputHasFocus: !1 }, function() {
            return R.props.onStartDateBlur && R.props.onStartDateBlur();
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleFromFocus', function() {
          R.setState({ inputHasFocus: !0 }, function() {
            return R.props.onStartDateFocus && R.props.onStartDateFocus();
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleFromChange', function(t) {
          R.setState({ selectedStartDate: t }, function() {
            var e = R.state.selectedEndDate;
            R.focusTo(), R.props.onChange({ selectedStartDate: t, selectedEndDate: e });
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleToChange', function(t) {
          R.setState({ selectedEndDate: t, mouseEnteredEndDate: t }, function() {
            var e = R.state.selectedStartDate;
            R.showFromMonth(), R.props.onChange({ selectedStartDate: e, selectedEndDate: t });
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleToBlur', function() {
          R.setState({ inputHasFocus: !1 }, function() {
            return R.props.onEndDateBlur && R.props.onEndDateBlur();
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleToFocus', function() {
          R.setState({ inputHasFocus: !0 }, function() {
            return R.props.onEndDateFocus && R.props.onEndDateFocus();
          }),
            R.state.selectedStartDate || R.focusFrom();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'renderDayPickerInput', function() {
          var e = R.props,
            t = e.className,
            a = e.dayPickerProps,
            r = e.dayPickerStartDateProps,
            i = e.dayPickerEndDateProps,
            n = e.dayPickerInputStartDateProps,
            u = e.dayPickerInputEndDateProps,
            l = e.disabled,
            s = e.inputProps,
            d = e.inputStartDateProps,
            o = e.inputEndDateProps,
            c = e.readOnly,
            f = e.size,
            p = (0, _objectWithoutProperties2.default)(e, [
              'className',
              'dayPickerProps',
              'dayPickerStartDateProps',
              'dayPickerEndDateProps',
              'dayPickerInputStartDateProps',
              'dayPickerInputEndDateProps',
              'disabled',
              'inputProps',
              'inputStartDateProps',
              'inputEndDateProps',
              'readOnly',
              'size',
            ]),
            _ = R.state,
            h = _.selectedStartDate,
            D = _.selectedEndDate,
            m = _.mouseEnteredEndDate,
            P = (0, _box.omitBoxProps)(p),
            y = (0, _classnames.default)(
              _uiUtilities.default['reset-font-smoothing'],
              _theme.default['date-picker'],
              _theme.default['has-range'],
              _theme.default['is-'.concat(f)],
              t,
            ),
            b = (0, _lodash.default)(P, ['helpText', 'onBlur', 'onChange', 'onFocus']),
            q = { from: h, to: m },
            E = [h, { from: h, to: m }],
            S = (0, _objectSpread2.default)(
              {
                className: y,
                classNames: _theme.default,
                modifiers: (0, _utils.convertModifiersToClassnames)(q, _theme.default),
                selectedDays: E,
                navbarElement: _react.default.createElement(_NavigationBar.default, { size: f }),
                weekdayElement: _react.default.createElement(_WeekDay.default, { size: f }),
              },
              a,
            ),
            g = (0, _objectSpread2.default)({ classNames: _theme.default, hideOnDayClick: !1 }, b),
            k = (0, _objectSpread2.default)({ disabled: l || c }, s);
          return _react.default.createElement(
            _react.Fragment,
            null,
            _react.default.createElement(
              _DayPickerInput.default,
              (0, _extends2.default)(
                {
                  dayPickerProps: (0, _objectSpread2.default)({ disabledDays: { after: D }, toMonth: D }, S, r),
                  onDayChange: R.handleFromChange,
                  inputProps: (0, _objectSpread2.default)(
                    { onBlur: R.handleFromBlur, onFocus: R.handleFromFocus },
                    k,
                    d,
                  ),
                  ref: function(e) {
                    return (R.startDate = e);
                  },
                },
                g,
                n,
              ),
            ),
            _react.default.createElement(
              _DayPickerInput.default,
              (0, _extends2.default)(
                {
                  dayPickerProps: (0, _objectSpread2.default)(
                    { disabledDays: { before: h }, month: h, fromMonth: h, onDayMouseEnter: R.handleDayMouseEnter },
                    S,
                    i,
                  ),
                  onDayChange: R.handleToChange,
                  inputProps: (0, _objectSpread2.default)({ onBlur: R.handleToBlur, onFocus: R.handleToFocus }, k, o),
                  ref: function(e) {
                    return (R.endDate = e);
                  },
                },
                g,
                u,
              ),
            ),
          );
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'renderIcon', function() {
          var e = R.props.inverse;
          return _react.default.createElement(
            _icon.default,
            {
              className: _theme.default['input-icon'],
              color: e ? 'teal' : 'neutral',
              tint: e ? 'light' : 'darkest',
              marginHorizontal: 2,
            },
            _react.default.createElement(_uiIcons.IconCalendarSmallOutline, null),
          );
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'showFromMonth', function() {
          var e = R.state,
            t = e.selectedStartDate,
            a = e.selectedEndDate;
          t && R.endDate.getDayPicker().showMonth(_index.DateUtils.addMonths(a, -1));
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(R), 'handleDayMouseEnter', function(e) {
          var t = R.state,
            a = t.selectedStartDate,
            r = t.selectedEndDate;
          (0, _utils.isSelectingFirstDay)(a, r, e) || R.setState({ mouseEnteredEndDate: e });
        }),
        R
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(
        i,
        [
          {
            key: 'componentWillUnmount',
            value: function() {
              clearTimeout(this.timeout);
            },
          },
          {
            key: 'render',
            value: function() {
              var e,
                t = this.props,
                a = t.bold,
                r = t.disabled,
                i = t.error,
                n = t.helpText,
                u = t.inverse,
                l = t.readOnly,
                s = t.size,
                d = t.warning,
                o = t.width,
                c = (0, _objectWithoutProperties2.default)(t, [
                  'bold',
                  'disabled',
                  'error',
                  'helpText',
                  'inverse',
                  'readOnly',
                  'size',
                  'warning',
                  'width',
                ]),
                f = (0, _box.pickBoxProps)(c),
                p = (0, _classnames.default)(
                  _uiUtilities.default['reset-font-smoothing'],
                  _theme.default['date-picker-input-range'],
                  _theme.default['is-'.concat(s)],
                  ((e = {}),
                  (0, _defineProperty2.default)(e, _theme.default['is-bold'], a),
                  (0, _defineProperty2.default)(e, _theme.default['is-disabled'], r),
                  (0, _defineProperty2.default)(e, _theme.default['is-inverse'], u),
                  (0, _defineProperty2.default)(e, _theme.default['is-read-only'], l),
                  (0, _defineProperty2.default)(e, _theme.default['has-error'], i),
                  (0, _defineProperty2.default)(e, _theme.default['has-focus'], this.state.inputHasFocus),
                  (0, _defineProperty2.default)(e, _theme.default['has-warning'], d),
                  e),
                );
              return _react.default.createElement(
                _box.default,
                (0, _extends2.default)({ className: p }, f),
                _react.default.createElement(
                  'div',
                  { className: _theme.default['input-wrapper'], style: { width: o } },
                  this.renderIcon(),
                  this.renderDayPickerInput(),
                ),
                _react.default.createElement(_validationText.default, { error: i, help: n, inverse: u, warning: d }),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function(e, t) {
              return void 0 === e.selectedRange ||
                (e.selectedRange.selectedStartDate === t.selectedStartDate &&
                  e.selectedRange.selectedEndDate === t.selectedEndDate)
                ? null
                : {
                    selectedStartDate: e.selectedRange.selectedStartDate,
                    selectedEndDate: e.selectedRange.selectedEndDate,
                    mouseEnteredEndDate: e.selectedRange.selectedEndDate,
                  };
            },
          },
        ],
      ),
      i
    );
  })(_react.PureComponent);
DatePickerInputRange.defaultProps = {
  bold: !1,
  disabled: !1,
  inverse: !1,
  readOnly: !1,
  size: 'medium',
  width: '210px',
};
var _default = DatePickerInputRange;
exports.default = _default;
