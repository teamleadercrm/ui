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

var Bullet =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Bullet, _PureComponent);

    function Bullet() {
      _classCallCheck(this, Bullet);

      return _possibleConstructorReturn(this, _getPrototypeOf(Bullet).apply(this, arguments));
    }

    _createClass(Bullet, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            className = _this$props.className,
            color = _this$props.color,
            size = _this$props.size,
            borderColor = _this$props.borderColor,
            borderTint = _this$props.borderTint,
            others = _objectWithoutProperties(_this$props, ['className', 'color', 'size', 'borderColor', 'borderTint']);

          var classNames = cx(
            theme['bullet'],
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
                'data-teamleader-ui': 'bullet',
                className: classNames,
                element: 'span',
              },
              others,
            ),
          );
        },
      },
    ]);

    return Bullet;
  })(PureComponent);

Bullet.defaultProps = {
  color: 'neutral',
  size: 'medium',
};
export default Bullet;
