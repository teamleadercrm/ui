import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../box';
import { IconButton } from '../button';
import {
  IconArrowLeftMediumOutline,
  IconArrowRightMediumOutline,
  IconArrowLeftSmallOutline,
  IconArrowRightSmallOutline,
} from '@teamleader/ui-icons';

var NavigationBar =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(NavigationBar, _PureComponent);

    function NavigationBar() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, NavigationBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(NavigationBar)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handlePreviousClick', function() {
        _this.props.onPreviousClick();
      });

      _defineProperty(_assertThisInitialized(_this), 'handleNextClick', function() {
        _this.props.onNextClick();
      });

      return _this;
    }

    _createClass(NavigationBar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            localeUtils = _this$props.localeUtils,
            nextMonth = _this$props.nextMonth,
            previousMonth = _this$props.previousMonth,
            size = _this$props.size;
          var months = localeUtils.getMonths();
          var previousMonthButtonLabel = months[previousMonth.getMonth()];
          var nextMonthButtonLabel = months[nextMonth.getMonth()];
          return React.createElement(
            Box,
            {
              className: className,
              display: 'flex',
              justifyContent: 'space-between',
            },
            React.createElement(IconButton, {
              icon:
                size === 'large'
                  ? React.createElement(IconArrowLeftMediumOutline, null)
                  : React.createElement(IconArrowLeftSmallOutline, null),
              onClick: this.handlePreviousClick,
              title: previousMonthButtonLabel,
            }),
            React.createElement(IconButton, {
              icon:
                size === 'large'
                  ? React.createElement(IconArrowRightMediumOutline, null)
                  : React.createElement(IconArrowRightSmallOutline, null),
              onClick: this.handleNextClick,
              title: nextMonthButtonLabel,
            }),
          );
        },
      },
    ]);

    return NavigationBar;
  })(PureComponent);

export default NavigationBar;
