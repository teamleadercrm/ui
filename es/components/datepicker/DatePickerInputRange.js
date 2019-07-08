import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Icon from '../icon';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';
import { DateUtils } from 'react-day-picker/lib/src/index';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import ValidationText from '../validationText';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var DatePickerInputRange =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(DatePickerInputRange, _PureComponent);

    function DatePickerInputRange() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DatePickerInputRange);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DatePickerInputRange)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        selectedStartDate: null,
        selectedEndDate: null,
        mouseEnteredEndDate: null,
        inputHasFocus: false,
      });

      _defineProperty(_assertThisInitialized(_this), 'focusFrom', function() {
        _this.timeout = setTimeout(function() {
          return _this.startDate.getInput().focus();
        }, 100);
      });

      _defineProperty(_assertThisInitialized(_this), 'focusTo', function() {
        _this.timeout = setTimeout(function() {
          return _this.endDate.getInput().focus();
        }, 0);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleFromBlur', function() {
        _this.setState(
          {
            inputHasFocus: false,
          },
          function() {
            return _this.props.onStartDateBlur && _this.props.onStartDateBlur();
          },
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'handleFromFocus', function() {
        _this.setState(
          {
            inputHasFocus: true,
          },
          function() {
            return _this.props.onStartDateFocus && _this.props.onStartDateFocus();
          },
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'handleFromChange', function(day) {
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

      _defineProperty(_assertThisInitialized(_this), 'handleToChange', function(day) {
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

      _defineProperty(_assertThisInitialized(_this), 'handleToBlur', function() {
        _this.setState(
          {
            inputHasFocus: false,
          },
          function() {
            return _this.props.onEndDateBlur && _this.props.onEndDateBlur();
          },
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'handleToFocus', function() {
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

      _defineProperty(_assertThisInitialized(_this), 'renderDayPickerInput', function() {
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
          others = _objectWithoutProperties(_this$props, [
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
        var propsWithoutBoxProps = omitBoxProps(others);
        var dayPickerClassNames = cx(
          uiUtilities['reset-font-smoothing'],
          theme['date-picker'],
          theme['has-range'],
          theme['is-'.concat(size)],
          className,
        );
        var dayPickerInputProps = omit(propsWithoutBoxProps, ['helpText', 'onBlur', 'onChange', 'onFocus']);
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

        var commonDayPickerProps = _objectSpread(
          {
            className: dayPickerClassNames,
            classNames: theme,
            modifiers: convertModifiersToClassnames(modifiers, theme),
            selectedDays: selectedDays,
            navbarElement: React.createElement(NavigationBar, {
              size: size,
            }),
            weekdayElement: React.createElement(WeekDay, {
              size: size,
            }),
          },
          dayPickerProps,
        );

        var commonDayPickerInputProps = _objectSpread(
          {
            classNames: theme,
            hideOnDayClick: false,
          },
          dayPickerInputProps,
        );

        var commonInputProps = _objectSpread(
          {
            disabled: disabled || readOnly,
          },
          inputProps,
        );

        return React.createElement(
          Fragment,
          null,
          React.createElement(
            DayPickerInput,
            _extends(
              {
                dayPickerProps: _objectSpread(
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
                inputProps: _objectSpread(
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
          React.createElement(
            DayPickerInput,
            _extends(
              {
                dayPickerProps: _objectSpread(
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
                inputProps: _objectSpread(
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

      _defineProperty(_assertThisInitialized(_this), 'renderIcon', function() {
        var inverse = _this.props.inverse;
        return React.createElement(
          Icon,
          {
            className: theme['input-icon'],
            color: inverse ? 'teal' : 'neutral',
            tint: inverse ? 'light' : 'darkest',
            marginHorizontal: 2,
          },
          React.createElement(IconCalendarSmallOutline, null),
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'showFromMonth', function() {
        var _this$state2 = _this.state,
          selectedStartDate = _this$state2.selectedStartDate,
          selectedEndDate = _this$state2.selectedEndDate;

        if (!selectedStartDate) {
          return;
        }

        _this.endDate.getDayPicker().showMonth(DateUtils.addMonths(selectedEndDate, -1));
      });

      _defineProperty(_assertThisInitialized(_this), 'handleDayMouseEnter', function(day) {
        var _this$state3 = _this.state,
          selectedStartDate = _this$state3.selectedStartDate,
          selectedEndDate = _this$state3.selectedEndDate;

        if (!isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
          _this.setState({
            mouseEnteredEndDate: day,
          });
        }
      });

      return _this;
    }

    _createClass(
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
              others = _objectWithoutProperties(_this$props2, [
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

            var boxProps = pickBoxProps(others);
            var classNames = cx(
              uiUtilities['reset-font-smoothing'],
              theme['date-picker-input-range'],
              theme['is-'.concat(size)],
              ((_cx = {}),
              _defineProperty(_cx, theme['is-bold'], bold),
              _defineProperty(_cx, theme['is-disabled'], disabled),
              _defineProperty(_cx, theme['is-inverse'], inverse),
              _defineProperty(_cx, theme['is-read-only'], readOnly),
              _defineProperty(_cx, theme['has-error'], error),
              _defineProperty(_cx, theme['has-focus'], this.state.inputHasFocus),
              _defineProperty(_cx, theme['has-warning'], warning),
              _cx),
            );
            return React.createElement(
              Box,
              _extends(
                {
                  className: classNames,
                },
                boxProps,
              ),
              React.createElement(
                'div',
                {
                  className: theme['input-wrapper'],
                  style: {
                    width: width,
                  },
                },
                this.renderIcon(),
                this.renderDayPickerInput(),
              ),
              React.createElement(ValidationText, {
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
  })(PureComponent);

DatePickerInputRange.defaultProps = {
  bold: false,
  disabled: false,
  inverse: false,
  readOnly: false,
  size: 'medium',
  width: '210px',
};
export default DatePickerInputRange;
