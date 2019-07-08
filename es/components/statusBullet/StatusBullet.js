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

var StatusBullet =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(StatusBullet, _PureComponent);

    function StatusBullet() {
      _classCallCheck(this, StatusBullet);

      return _possibleConstructorReturn(this, _getPrototypeOf(StatusBullet).apply(this, arguments));
    }

    _createClass(StatusBullet, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'color', 'size']);

          var classNames = cx(theme['bullet'], theme[color], theme[size], className);
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                'data-teamleader-ui': 'status-bullet',
                element: 'span',
              },
              others,
            ),
            children,
          );
        },
      },
    ]);

    return StatusBullet;
  })(PureComponent);

StatusBullet.defaultProps = {
  color: 'neutral',
  size: 'medium',
};
export default StatusBullet;
