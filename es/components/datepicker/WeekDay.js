import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var WeekDay =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(WeekDay, _PureComponent);

    function WeekDay() {
      _classCallCheck(this, WeekDay);

      return _possibleConstructorReturn(this, _getPrototypeOf(WeekDay).apply(this, arguments));
    }

    _createClass(WeekDay, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            weekday = _this$props.weekday,
            className = _this$props.className,
            localeUtils = _this$props.localeUtils,
            locale = _this$props.locale,
            size = _this$props.size;
          var weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
          return React.createElement(
            'div',
            {
              className: className,
              title: weekdayName,
            },
            weekdayName.slice(0, size === 'large' ? 2 : 1),
          );
        },
      },
    ]);

    return WeekDay;
  })(PureComponent);

export default WeekDay;
