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
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var Counter =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Counter, _PureComponent);

    function Counter() {
      _classCallCheck(this, Counter);

      return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
    }

    _createClass(Counter, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            count = _this$props.count,
            maxCount = _this$props.maxCount,
            size = _this$props.size,
            borderColor = _this$props.borderColor,
            borderTint = _this$props.borderTint,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'color',
              'count',
              'maxCount',
              'size',
              'borderColor',
              'borderTint',
            ]);

          var classNames = cx(
            uiUtilities['reset-font-smoothing'],
            theme['counter'],
            theme[color],
            theme[size],
            ((_cx = {}),
            _defineProperty(
              _cx,
              theme['border-'.concat(borderColor, '-').concat(borderTint)],
              borderColor && borderTint,
            ),
            _defineProperty(_cx, theme['border-'.concat(borderColor)], borderColor && !borderTint),
            _cx),
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                element: 'span',
              },
              others,
              {
                'data-teamleader-ui': 'counter',
              },
            ),
            count > maxCount ? ''.concat(maxCount, '+') : count,
            ' ',
            children,
          );
        },
      },
    ]);

    return Counter;
  })(PureComponent);

Counter.defaultProps = {
  color: 'neutral',
  size: 'medium',
};
export default Counter;
