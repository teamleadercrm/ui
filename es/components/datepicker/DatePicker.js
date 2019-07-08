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
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var DatePicker =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(DatePicker, _PureComponent);

    function DatePicker() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DatePicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        selectedDate: null,
      });

      _defineProperty(_assertThisInitialized(_this), 'handleDayClick', function(day) {
        _this.setState(
          {
            selectedDate: day,
          },
          function() {
            return _this.props.onChange(day);
          },
        );
      });

      return _this;
    }

    _createClass(
      DatePicker,
      [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              bordered = _this$props.bordered,
              className = _this$props.className,
              modifiers = _this$props.modifiers,
              size = _this$props.size,
              others = _objectWithoutProperties(_this$props, ['bordered', 'className', 'modifiers', 'size']);

            var selectedDate = this.state.selectedDate;
            var boxProps = pickBoxProps(others);
            var restProps = omitBoxProps(others);
            var classNames = cx(
              uiUtilities['reset-font-smoothing'],
              theme['date-picker'],
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
                  selectedDays: selectedDate,
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

    return DatePicker;
  })(PureComponent);

DatePicker.defaultProps = {
  bordered: true,
  size: 'medium',
};
export default DatePicker;
