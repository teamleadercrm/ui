'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
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
  _reactDayPicker = _interopRequireDefault(require('react-day-picker')),
  _box = _interopRequireWildcard(require('../box')),
  _NavigationBar = _interopRequireDefault(require('./NavigationBar')),
  _WeekDay = _interopRequireDefault(require('./WeekDay')),
  _utils = require('./utils'),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  DatePickerRange = (function(e) {
    function l() {
      var e, i;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (i = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'state', {
          selectedStartDate: null,
          selectedEndDate: null,
          mouseEnteredEndDate: null,
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleDayClick', function(e) {
          var t = i.state,
            r = t.selectedStartDate,
            a = t.selectedEndDate;
          (0, _utils.isSelectingFirstDay)(r, a, e)
            ? i.setState({ selectedStartDate: e, selectedEndDate: null, mouseEnteredEndDate: null }, function() {
                return i.props.onChange({ selectedStartDate: e, selectedEndDate: null });
              })
            : i.setState({ selectedEndDate: e, mouseEnteredEndDate: e }, function() {
                return i.props.onChange({ selectedStartDate: r, selectedEndDate: e });
              });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleDayMouseEnter', function(e) {
          var t = i.state,
            r = t.selectedStartDate,
            a = t.selectedEndDate;
          (0, _utils.isSelectingFirstDay)(r, a, e) || i.setState({ mouseEnteredEndDate: e });
        }),
        i
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(
        l,
        [
          {
            key: 'render',
            value: function() {
              var e = this.props,
                t = e.bordered,
                r = e.className,
                a = e.size,
                i = (0, _objectWithoutProperties2.default)(e, ['bordered', 'className', 'size']),
                l = this.state,
                s = l.selectedStartDate,
                u = l.mouseEnteredEndDate,
                n = { from: s, to: u },
                d = [s, { from: s, to: u }],
                o = (0, _box.pickBoxProps)(i),
                c = (0, _box.omitBoxProps)(i),
                _ = (0, _classnames.default)(
                  _uiUtilities.default['reset-font-smoothing'],
                  _theme.default['date-picker'],
                  _theme.default['has-range'],
                  _theme.default['is-'.concat(a)],
                  (0, _defineProperty2.default)({}, _theme.default['is-bordered'], t),
                  r,
                );
              return _react.default.createElement(
                _box.default,
                o,
                _react.default.createElement(
                  _reactDayPicker.default,
                  (0, _extends2.default)({}, c, {
                    className: _,
                    classNames: _theme.default,
                    modifiers: (0, _utils.convertModifiersToClassnames)(n, _theme.default),
                    navbarElement: _react.default.createElement(_NavigationBar.default, { size: a }),
                    onDayClick: this.handleDayClick,
                    onDayMouseEnter: this.handleDayMouseEnter,
                    selectedDays: d,
                    weekdayElement: _react.default.createElement(_WeekDay.default, { size: a }),
                  }),
                ),
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
      l
    );
  })(_react.PureComponent);
DatePickerRange.defaultProps = { bordered: !1, size: 'medium' };
var _default = DatePickerRange;
exports.default = _default;
