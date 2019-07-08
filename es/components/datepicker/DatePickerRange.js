import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import { convertModifiersToClassnames, isSelectingFirstDay } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var DatePickerRange =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(DatePickerRange, _PureComponent);

    function DatePickerRange() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DatePickerRange);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DatePickerRange)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        selectedStartDate: null,
        selectedEndDate: null,
        mouseEnteredEndDate: null,
      });

      _defineProperty(_assertThisInitialized(_this), 'handleDayClick', function(day) {
        var _this$state = _this.state,
          selectedStartDate = _this$state.selectedStartDate,
          selectedEndDate = _this$state.selectedEndDate;

        if (isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
          _this.setState(
            {
              selectedStartDate: day,
              selectedEndDate: null,
              mouseEnteredEndDate: null,
            },
            function() {
              return _this.props.onChange({
                selectedStartDate: day,
                selectedEndDate: null,
              });
            },
          );
        } else {
          _this.setState(
            {
              selectedEndDate: day,
              mouseEnteredEndDate: day,
            },
            function() {
              return _this.props.onChange({
                selectedStartDate: selectedStartDate,
                selectedEndDate: day,
              });
            },
          );
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleDayMouseEnter', function(day) {
        var _this$state2 = _this.state,
          selectedStartDate = _this$state2.selectedStartDate,
          selectedEndDate = _this$state2.selectedEndDate;

        if (!isSelectingFirstDay(selectedStartDate, selectedEndDate, day)) {
          _this.setState({
            mouseEnteredEndDate: day,
          });
        }
      });

      return _this;
    }

    _createClass(
      DatePickerRange,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              bordered = _this$props.bordered,
              className = _this$props.className,
              size = _this$props.size,
              others = _objectWithoutProperties(_this$props, ['bordered', 'className', 'size']);

            var _this$state3 = this.state,
              selectedStartDate = _this$state3.selectedStartDate,
              mouseEnteredEndDate = _this$state3.mouseEnteredEndDate;
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
            var boxProps = pickBoxProps(others);
            var restProps = omitBoxProps(others);
            var classNames = cx(
              uiUtilities['reset-font-smoothing'],
              theme['date-picker'],
              theme['has-range'],
              theme['is-'.concat(size)],
              _defineProperty({}, theme['is-bordered'], bordered),
              className,
            );
            return React.createElement(
              Box,
              boxProps,
              React.createElement(
                DayPicker,
                _extends({}, restProps, {
                  className: classNames,
                  classNames: theme,
                  modifiers: convertModifiersToClassnames(modifiers, theme),
                  navbarElement: React.createElement(NavigationBar, {
                    size: size,
                  }),
                  onDayClick: this.handleDayClick,
                  onDayMouseEnter: this.handleDayMouseEnter,
                  selectedDays: selectedDays,
                  weekdayElement: React.createElement(WeekDay, {
                    size: size,
                  }),
                }),
              ),
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

    return DatePickerRange;
  })(PureComponent);

DatePickerRange.defaultProps = {
  bordered: false,
  size: 'medium',
};
export default DatePickerRange;
