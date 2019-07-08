import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

var TimerPulser =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(TimerPulser, _PureComponent);

    function TimerPulser() {
      _classCallCheck(this, TimerPulser);

      return _possibleConstructorReturn(this, _getPrototypeOf(TimerPulser).apply(this, arguments));
    }

    _createClass(TimerPulser, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['className', 'size']);

          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'timer-pulser',
                className: cx(theme['pulser-container'], theme['is-'.concat(size, '-outer')], className),
              },
              others,
            ),
            React.createElement(
              Box,
              _extends(
                {
                  className: cx(theme['pulser'], theme['is-'.concat(size, '-inner')], className),
                },
                others,
              ),
            ),
          );
        },
      },
    ]);

    return TimerPulser;
  })(PureComponent);

TimerPulser.defaultProps = {
  size: 'medium',
};
export default TimerPulser;
