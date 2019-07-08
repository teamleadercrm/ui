import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';
import Section from '../section';
import { IconButton } from '../button';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

var Banner =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Banner, _PureComponent);

    function Banner() {
      _classCallCheck(this, Banner);

      return _possibleConstructorReturn(this, _getPrototypeOf(Banner).apply(this, arguments));
    }

    _createClass(Banner, [
      {
        key: 'getCloseButtonColor',
        value: function getCloseButtonColor() {
          var color = this.props.color;
          return color === 'white' ? 'neutral' : color;
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            icon = _this$props.icon,
            onClose = _this$props.onClose,
            fullWidth = _this$props.fullWidth,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'icon', 'onClose', 'fullWidth']);

          var Element = fullWidth ? Section : Island;
          return React.createElement(
            Element,
            _extends(
              {
                'data-teamleader-ui': 'banner',
                className: className,
              },
              others,
            ),
            React.createElement(
              'div',
              {
                className: theme['inner'],
              },
              icon &&
                React.createElement(
                  'span',
                  {
                    className: theme['icon'],
                  },
                  icon,
                ),
              React.createElement(
                'span',
                {
                  className: theme['content'],
                },
                children,
              ),
              onClose &&
                React.createElement(IconButton, {
                  className: theme['close-button'],
                  icon: React.createElement(IconCloseMediumOutline, null),
                  color: this.getCloseButtonColor(),
                  onClick: onClose,
                }),
            ),
          );
        },
      },
    ]);

    return Banner;
  })(PureComponent);

Banner.defaultProps = {
  color: 'white',
};
export default Banner;
