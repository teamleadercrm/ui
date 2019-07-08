'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireWildcard(require('../box'));

var _DayPickerInput = _interopRequireDefault(require('react-day-picker/DayPickerInput'));

var _icon = _interopRequireDefault(require('../icon'));

var _NavigationBar = _interopRequireDefault(require('./NavigationBar'));

var _WeekDay = _interopRequireDefault(require('./WeekDay'));

var _utils = require('./utils');

var _index = require('react-day-picker/lib/src/index');

var _uiIcons = require('@teamleader/ui-icons');

var _validationText = _interopRequireDefault(require('../validationText'));

var _classnames = _interopRequireDefault(require('classnames'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var DatePickerInputRange =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(DatePickerInputRange, _PureComponent);

    function DatePickerInputRange() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DatePickerInputRange);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DatePickerInputRange)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        selectedStartDate: null,
        selectedEndDate: null,
        mouseEnteredEndDate: null,
        inputHasFocus: false,
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'focusFrom', function() {
        _this.timeout = setTimeout(function() {
          return _this.startDate.getInput().focus();
        }, 100);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'focusTo', function() {
        _this.timeout = setTimeout(function() {
          return _this.endDate.getInput().focus();
        }, 0);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleFromBlur', function() {
        _this.setState(
          {
            inputHasFocus: false,
          },
          function() {
            return _this.props.onStartDateBlur && _this.props.onStartDateBlur();
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleFromFocus', function() {
        _this.setState(
          {
            inputHasFocus: true,
          },
          function() {
            return _this.props.onStartDateFocus && _this.props.onStartDateFocus();
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleFromChange', function(day) {
        _this.setState(
          {
            selectedStartDate: day,
          },
          function() {
            var selectedEndDate = _this.state.selectedEndDate;

            _this.focusTo();

            _this.props.onChange({
              selectedStartDate: day,
              selectedEndDate: selectedEndDate,
            });
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleToChange', function(day) {
        _this.setState(
          {
            selectedEndDate: day,
            mouseEnteredEndDate: day,
          },
          function() {
            var selectedStartDate = _this.state.selectedStartDate;

            _this.showFromMonth();

            _this.props.onChange({
              selectedStartDate: selectedStartDate,
              selectedEndDate: day,
            });
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleToBlur', function() {
        _this.setState(
          {
            inputHasFocus: false,
          },
          function() {
            return _this.props.onEndDateBlur && _this.props.onEndDateBlur();
          },
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleToFocus', function() {
        _this.setState(
          {
            inputHasFocus: true,
          },
          function() {
            return _this.props.onEndDateFocus && _this.props.onEndDateFocus();
          },
        );

        if (!_this.state.selectedStartDate) {
          _this.focusFrom();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderDayPickerInput', function() {
        var _this$props = _this.props,
          className = _this$props.className,
          dayPickerProps = _this$props.dayPickerProps,
          dayPickerStartDateProps = _this$props.dayPickerStartDateProps,
          dayPickerEndDateProps = _this$props.dayPickerEndDateProps,
          dayPickerInputStartDateProps = _this$props.dayPickerInputStartDateProps,
          dayPickerInputEndDateProps = _this$props.dayPickerInputEndDateProps,
          disabled = _this$props.disabled,
          inputProps = _this$props.inputProps,
          inputStartDateProps = _this$props.inputStartDateProps,
          inputEndDateProps = _this$props.inputEndDateProps,
          readOnly = _this$props.readOnly,
          size = _this$props.size,
          others = (0, _objectWithoutProperties2.default)(_this$props, [
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
          ]);
        var _this$state = _this.state,
          selectedStartDate = _this$state.selectedStartDate,
          selectedEndDate = _this$state.selectedEndDate,
          mouseEnteredEndDate = _this$state.mouseEnteredEndDate;
        var propsWithoutBoxProps = (0, _box.omitBoxProps)(others);
        var dayPickerClassNames = (0, _classnames.default)(
          _uiUtilities.default['reset-font-smoothing'],
          _theme.default['date-picker'],
          _theme.default['has-range'],
          _theme.default['is-'.concat(size)],
          className,
        );
        var dayPickerInputProps = (0, _lodash.default)(propsWithoutBoxProps, [
          'helpText',
          'onBlur',
          'onChange',
          'onFocus',
        ]);
        var modifiers = {
          from: selectedStartDate,
          to: mouseEnteredEndDate,
        };
        var selectedDays = [
          selectedStartDate,
          {
            from: selectedStartDate,
            to: mouseEnteredEndDate,
          },
        ];
        var commonDayPickerProps = (0, _objectSpread2.default)(
          {
            className: dayPickerClassNames,
            classNames: _theme.default,
            modifiers: (0, _utils.convertModifiersToClassnames)(modifiers, _theme.default),
            selectedDays: selectedDays,
            navbarElement: _react.default.createElement(_NavigationBar.default, {
              size: size,
            }),
            weekdayElement: _react.default.createElement(_WeekDay.default, {
              size: size,
            }),
          },
          dayPickerProps,
        );
        var commonDayPickerInputProps = (0, _objectSpread2.default)(
          {
            classNames: _theme.default,
            hideOnDayClick: false,
          },
          dayPickerInputProps,
        );
        var commonInputProps = (0, _objectSpread2.default)(
          {
            disabled: disabled || readOnly,
          },
          inputProps,
        );
        return _react.default.createElement(
          _react.Fragment,
          null,
          _react.default.createElement(
            _DayPickerInput.default,
            (0, _extends2.default)(
              {
                dayPickerProps: (0, _objectSpread2.default)(
                  {
                    disabledDays: {
                      after: selectedEndDate,
                    },
                    toMonth: selectedEndDate,
                  },
                  commonDayPickerProps,
                  dayPickerStartDateProps,
                ),
                onDayChange: _this.handleFromChange,
                inputProps: (0, _objectSpread2.default)(
                  {
                    onBlur: _this.handleFromBlur,
                    onFocus: _this.handleFromFocus,
                  },
                  commonInputProps,
                  inputStartDateProps,
                ),
                ref: function ref(el) {
                  return (_this.startDate = el);
                },
              },
              commonDayPickerInputProps,
              dayPickerInputStartDateProps,
            ),
          ),
          _react.default.createElement(
            _DayPickerInput.default,
            (0, _extends2.default)(
              {
                dayPickerProps: (0, _objectSpread2.default)(
                  {
                    disabledDays: {
                      before: selectedStartDate,
                    },
                    month: selectedStartDate,
                    fromMonth: selectedStartDate,
                    onDayMouseEnter: _this.handleDayMouseEnter,
                  },
                  commonDayPickerProps,
                  dayPickerEndDateProps,
                ),
                onDayChange: _this.handleToChange,
                inputProps: (0, _objectSpread2.default)(
                  {
                    onBlur: _this.handleToBlur,
                    onFocus: _this.handleToFocus,
                  },
                  commonInputProps,
                  inputEndDateProps,
                ),
                ref: function ref(el) {
                  return (_this.endDate = el);
                },
              },
              commonDayPickerInputProps,
              dayPickerInputEndDateProps,
            ),
          ),
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderIcon', function() {
        var inverse = _this.props.inverse;
        return _react.default.createElement(
          _icon.default,
          {
            className: _theme.default['input-icon'],
            color: inverse ? 'teal' : 'neutral',
            tint: inverse ? 'light' : 'darkest',
            marginHorizontal: 2,
          },
          _react.default.createElement(_uiIcons.IconCalendarSmallOutline, null),
        );
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'showFromMonth', function() {
        var _this$state2 = _this.state,
          selectedStartDate = _this$state2.selectedStartDate,
          selectedEndDate = _this$state2.selectedEndDate;

        if (!selectedStartDate) {
          return;
        }

        _this.endDate.getDayPicker().showMonth(_index.DateUtils.addMonths(selectedEndDate, -1));
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDayMouseEnter', function(day) {
        var _this$state3 = _this.state,
          selectedStartDate = _this$state3.selectedStartDate,
          selectedEndDate = _this$state3.selectedEndDate;

        if (!(0, _utils.isSelectingFirstDay)(selectedStartDate, selectedEndDate, day)) {
          _this.setState({
            mouseEnteredEndDate: day,
          });
        }
      });
      return _this;
    }

    (0, _createClass2.default)(
      DatePickerInputRange,
      [
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            clearTimeout(this.timeout);
          },
        },
        {
          key: 'render',
          value: function render() {
            var _cx;

            var _this$props2 = this.props,
              bold = _this$props2.bold,
              disabled = _this$props2.disabled,
              error = _this$props2.error,
              helpText = _this$props2.helpText,
              inverse = _this$props2.inverse,
              readOnly = _this$props2.readOnly,
              size = _this$props2.size,
              warning = _this$props2.warning,
              width = _this$props2.width,
              others = (0, _objectWithoutProperties2.default)(_this$props2, [
                'bold',
                'disabled',
                'error',
                'helpText',
                'inverse',
                'readOnly',
                'size',
                'warning',
                'width',
              ]);
            var boxProps = (0, _box.pickBoxProps)(others);
            var classNames = (0, _classnames.default)(
              _uiUtilities.default['reset-font-smoothing'],
              _theme.default['date-picker-input-range'],
              _theme.default['is-'.concat(size)],
              ((_cx = {}),
              (0, _defineProperty2.default)(_cx, _theme.default['is-bold'], bold),
              (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
              (0, _defineProperty2.default)(_cx, _theme.default['is-inverse'], inverse),
              (0, _defineProperty2.default)(_cx, _theme.default['is-read-only'], readOnly),
              (0, _defineProperty2.default)(_cx, _theme.default['has-error'], error),
              (0, _defineProperty2.default)(_cx, _theme.default['has-focus'], this.state.inputHasFocus),
              (0, _defineProperty2.default)(_cx, _theme.default['has-warning'], warning),
              _cx),
            );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  className: classNames,
                },
                boxProps,
              ),
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['input-wrapper'],
                  style: {
                    width: width,
                  },
                },
                this.renderIcon(),
                this.renderDayPickerInput(),
              ),
              _react.default.createElement(_validationText.default, {
                error: error,
                help: helpText,
                inverse: inverse,
                warning: warning,
              }),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(props, state) {
            if (
              props.selectedRange !== undefined &&
              (props.selectedRange.selectedStartDate !== state.selectedStartDate ||
                props.selectedRange.selectedEndDate !== state.selectedEndDate)
            ) {
              return {
                selectedStartDate: props.selectedRange.selectedStartDate,
                selectedEndDate: props.selectedRange.selectedEndDate,
                mouseEnteredEndDate: props.selectedRange.selectedEndDate,
              };
            }

            return null;
          },
        },
      ],
    );
    return DatePickerInputRange;
  })(_react.PureComponent);

DatePickerInputRange.defaultProps = {
  bold: false,
  disabled: false,
  inverse: false,
  readOnly: false,
  size: 'medium',
  width: '210px',
};
var _default = DatePickerInputRange;
exports.default = _default;
