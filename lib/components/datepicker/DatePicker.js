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
  DatePicker = (function(e) {
    function l() {
      var e, t;
      (0, _classCallCheck2.default)(this, l);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'state', { selectedDate: null }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleDayClick', function(e) {
          t.setState({ selectedDate: e }, function() {
            return t.props.onChange(e);
          });
        }),
        t
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
                i = e.modifiers,
                a = e.size,
                l = (0, _objectWithoutProperties2.default)(e, ['bordered', 'className', 'modifiers', 'size']),
                u = this.state.selectedDate,
                s = (0, _box.pickBoxProps)(l),
                o = (0, _box.omitBoxProps)(l),
                n = (0, _classnames.default)(
                  _uiUtilities.default['reset-font-smoothing'],
                  _theme.default['date-picker'],
                  _theme.default['is-'.concat(a)],
                  (0, _defineProperty2.default)({}, _theme.default['is-bordered'], t),
                  r,
                );
              return _react.default.createElement(
                _box.default,
                s,
                _react.default.createElement(
                  _reactDayPicker.default,
                  (0, _extends2.default)({}, o, {
                    className: n,
                    classNames: _theme.default,
                    modifiers: (0, _utils.convertModifiersToClassnames)(i, _theme.default),
                    navbarElement: _react.default.createElement(_NavigationBar.default, { size: a }),
                    onDayClick: this.handleDayClick,
                    selectedDays: u,
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
              return void 0 !== e.selectedDate && e.selectedDate !== t.selectedDate
                ? { selectedDate: e.selectedDate }
                : null;
            },
          },
        ],
      ),
      l
    );
  })(_react.PureComponent);
DatePicker.defaultProps = { bordered: !0, size: 'medium' };
var _default = DatePicker;
exports.default = _default;
