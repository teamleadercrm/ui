import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
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
import omit from 'lodash.omit';
import theme from './theme.css';
import { elementIsDark } from '../utils/utils';
var SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

var Island =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Island, _PureComponent);

    function Island() {
      _classCallCheck(this, Island);

      return _possibleConstructorReturn(this, _getPrototypeOf(Island).apply(this, arguments));
    }

    _createClass(Island, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            dark = _this$props.dark,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'color', 'dark', 'size']);

          var isDark = elementIsDark(color, dark);
          var classNames = cx(theme['island'], className, theme[color], _defineProperty({}, theme['dark'], isDark));
          var rest = omit(others, ['dark']);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'island',
                className: classNames,
                padding: SIZES[size],
              },
              rest,
            ),
            children,
          );
        },
      },
    ]);

    return Island;
  })(PureComponent);

Island.defaultProps = {
  color: 'white',
  size: 'medium',
};
export default Island;
