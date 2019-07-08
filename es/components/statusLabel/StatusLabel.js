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
import uiUtilities from '@teamleader/ui-utilities';
var SIZES = {
  medium: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  small: {
    paddingHorizontal: 2,
  },
};

var StatusLabel =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(StatusLabel, _PureComponent);

    function StatusLabel() {
      _classCallCheck(this, StatusLabel);

      return _possibleConstructorReturn(this, _getPrototypeOf(StatusLabel).apply(this, arguments));
    }

    _createClass(StatusLabel, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'color', 'size']);

          var classNames = cx(
            uiUtilities['reset-font-smoothing'],
            theme['label'],
            theme[color],
            theme[size],
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                element: 'span',
              },
              SIZES[size],
              others,
              {
                'data-teamleader-ui': 'status-label',
              },
            ),
            children,
          );
        },
      },
    ]);

    return StatusLabel;
  })(PureComponent);

StatusLabel.defaultProps = {
  color: 'neutral',
  size: 'medium',
};
export default StatusLabel;
