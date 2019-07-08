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
import Box, { pickBoxProps } from '../box';
import DatePicker from '../datepicker';
import Icon from '../icon';
import Input from '../input';
import Popover from '../popover';
import cx from 'classnames';
import theme from './theme.css';
import LocaleUtils, { formatDate } from './localeUtils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';

var DatePickerInput =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(DatePickerInput, _PureComponent);

    function DatePickerInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DatePickerInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DatePickerInput)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        isPopoverActive: false,
        popoverAnchorEl: null,
        selectedDate: null,
      });

      _defineProperty(_assertThisInitialized(_this), 'handleInputFocus', function(event) {
        var _this$props$inputProp = _this.props.inputProps,
          onFocus = _this$props$inputProp.onFocus,
          readOnly = _this$props$inputProp.readOnly;

        if (readOnly) {
          return;
        }

        _this.setState(
          {
            popoverAnchorEl: event.currentTarget,
            isPopoverActive: true,
          },
          function() {
            return onFocus && onFocus();
          },
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'handlePopoverClose', function() {
        _this.setState({
          isPopoverActive: false,
        });
      });

      _defineProperty(_assertThisInitialized(_this), 'handleDatePickerDateChange', function(date) {
        _this.setState(
          {
            isPopoverActive: false,
            selectedDay: date,
          },
          function() {
            return _this.props.onChange(date);
          },
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'renderIcon', function() {
        var inverse = _this.props.inputProps && _this.props.inputProps.inverse;
        return React.createElement(
          Icon,
          {
            color: inverse ? 'teal' : 'neutral',
            tint: inverse ? 'light' : 'darkest',
            marginHorizontal: 2,
          },
          React.createElement(IconCalendarSmallOutline, null),
        );
      });

      return _this;
    }

    _createClass(
      DatePickerInput,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              bordered = _this$props.bordered,
              className = _this$props.className,
              dayPickerProps = _this$props.dayPickerProps,
              inverse = _this$props.inverse,
              inputProps = _this$props.inputProps,
              locale = _this$props.locale,
              popoverProps = _this$props.popoverProps,
              size = _this$props.size,
              others = _objectWithoutProperties(_this$props, [
                'bordered',
                'className',
                'dayPickerProps',
                'inverse',
                'inputProps',
                'locale',
                'popoverProps',
                'size',
              ]);

            var _this$state = this.state,
              isPopoverActive = _this$state.isPopoverActive,
              popoverAnchorEl = _this$state.popoverAnchorEl,
              selectedDate = _this$state.selectedDate;
            var boxProps = pickBoxProps(others);
            var datePickerClassNames = cx(theme['date-picker-input'], theme['is-'.concat(size)]);
            var formattedDate = this.props.formatDate
              ? this.props.formatDate(selectedDate, locale)
              : formatDate(selectedDate, locale);
            return React.createElement(
              Box,
              _extends(
                {
                  className: className,
                },
                boxProps,
              ),
              React.createElement(
                Input,
                _extends(
                  {
                    inverse: inverse,
                    onFocus: this.handleInputFocus,
                    prefix: this.renderIcon(),
                    size: size,
                    value: formattedDate,
                    width: '120px',
                  },
                  inputProps,
                ),
              ),
              React.createElement(
                Popover,
                _extends(
                  {
                    active: isPopoverActive,
                    anchorEl: popoverAnchorEl,
                    backdrop: 'transparent',
                    fullWidth: true,
                    onEscKeyDown: this.handlePopoverClose,
                    onOverlayClick: this.handlePopoverClose,
                    position: 'end',
                    offsetCorrection: 30,
                    zIndex: 500,
                  },
                  popoverProps,
                ),
                React.createElement(
                  Box,
                  {
                    overflowY: 'auto',
                  },
                  React.createElement(
                    DatePicker,
                    _extends(
                      {
                        bordered: bordered,
                        className: datePickerClassNames,
                        locale: locale,
                        localeUtils: LocaleUtils,
                        month: selectedDate,
                        onChange: this.handleDatePickerDateChange,
                        selectedDate: selectedDate,
                      },
                      dayPickerProps,
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
          value: function getDerivedStateFromProps(props, state) {
            if (props.selectedDate !== undefined && props.selectedDate !== state.selectedDate) {
              return {
                selectedDate: props.selectedDate,
              };
            }

            return null;
          },
        },
      ],
    );

    return DatePickerInput;
  })(PureComponent);

DatePickerInput.defaultProps = {
  bordered: false,
  dayPickerProps: {},
  inputProps: {},
  inverse: false,
  locale: 'en-GB',
  popoverProps: {},
  size: 'medium',
};
export default DatePickerInput;
