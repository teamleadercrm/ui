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
  _box = _interopRequireWildcard(require('../box')),
  _datepicker = _interopRequireDefault(require('../datepicker')),
  _icon = _interopRequireDefault(require('../icon')),
  _input = _interopRequireDefault(require('../input')),
  _popover = _interopRequireDefault(require('../popover')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _localeUtils = _interopRequireWildcard(require('./localeUtils')),
  _uiIcons = require('@teamleader/ui-icons'),
  DatePickerInput = (function(e) {
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
          isPopoverActive: !1,
          popoverAnchorEl: null,
          selectedDate: null,
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleInputFocus', function(e) {
          var t = i.props.inputProps,
            r = t.onFocus;
          t.readOnly ||
            i.setState({ popoverAnchorEl: e.currentTarget, isPopoverActive: !0 }, function() {
              return r && r();
            });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handlePopoverClose', function() {
          i.setState({ isPopoverActive: !1 });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleDatePickerDateChange', function(
          e,
        ) {
          i.setState({ isPopoverActive: !1, selectedDay: e }, function() {
            return i.props.onChange(e);
          });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'renderIcon', function() {
          var e = i.props.inputProps && i.props.inputProps.inverse;
          return _react.default.createElement(
            _icon.default,
            { color: e ? 'teal' : 'neutral', tint: e ? 'light' : 'darkest', marginHorizontal: 2 },
            _react.default.createElement(_uiIcons.IconCalendarSmallOutline, null),
          );
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
                i = e.dayPickerProps,
                a = e.inverse,
                l = e.inputProps,
                o = e.locale,
                n = e.popoverProps,
                u = e.size,
                s = (0, _objectWithoutProperties2.default)(e, [
                  'bordered',
                  'className',
                  'dayPickerProps',
                  'inverse',
                  'inputProps',
                  'locale',
                  'popoverProps',
                  'size',
                ]),
                p = this.state,
                c = p.isPopoverActive,
                d = p.popoverAnchorEl,
                f = p.selectedDate,
                _ = (0, _box.pickBoxProps)(s),
                h = (0, _classnames.default)(_theme.default['date-picker-input'], _theme.default['is-'.concat(u)]),
                P = this.props.formatDate ? this.props.formatDate(f, o) : (0, _localeUtils.formatDate)(f, o);
              return _react.default.createElement(
                _box.default,
                (0, _extends2.default)({ className: r }, _),
                _react.default.createElement(
                  _input.default,
                  (0, _extends2.default)(
                    {
                      inverse: a,
                      onFocus: this.handleInputFocus,
                      prefix: this.renderIcon(),
                      size: u,
                      value: P,
                      width: '120px',
                    },
                    l,
                  ),
                ),
                _react.default.createElement(
                  _popover.default,
                  (0, _extends2.default)(
                    {
                      active: c,
                      anchorEl: d,
                      backdrop: 'transparent',
                      fullWidth: !0,
                      onEscKeyDown: this.handlePopoverClose,
                      onOverlayClick: this.handlePopoverClose,
                      position: 'end',
                      offsetCorrection: 30,
                      zIndex: 500,
                    },
                    n,
                  ),
                  _react.default.createElement(
                    _box.default,
                    { overflowY: 'auto' },
                    _react.default.createElement(
                      _datepicker.default,
                      (0, _extends2.default)(
                        {
                          bordered: t,
                          className: h,
                          locale: o,
                          localeUtils: _localeUtils.default,
                          month: f,
                          onChange: this.handleDatePickerDateChange,
                          selectedDate: f,
                        },
                        i,
                      ),
                    ),
                  ),
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
DatePickerInput.defaultProps = {
  bordered: !1,
  dayPickerProps: {},
  inputProps: {},
  inverse: !1,
  locale: 'en-GB',
  popoverProps: {},
  size: 'medium',
};
var _default = DatePickerInput;
exports.default = _default;
