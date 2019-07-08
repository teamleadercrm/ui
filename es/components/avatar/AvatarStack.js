import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { cloneElement, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var AvatarStack =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(AvatarStack, _PureComponent);

    function AvatarStack() {
      _classCallCheck(this, AvatarStack);

      return _possibleConstructorReturn(this, _getPrototypeOf(AvatarStack).apply(this, arguments));
    }

    _createClass(AvatarStack, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            direction = _this$props.direction,
            displayMax = _this$props.displayMax,
            inverse = _this$props.inverse,
            onOverflowClick = _this$props.onOverflowClick,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'direction',
              'displayMax',
              'inverse',
              'onOverflowClick',
              'size',
            ]);

          var classNames = cx(
            theme['stack'],
            theme[direction],
            theme['is-'.concat(size)],
            inverse ? [theme['light']] : [theme['dark']],
            className,
          );
          var childrenToDisplay = displayMax > 0 ? children.slice(0, displayMax) : children;
          var overflowAmount = children.length - displayMax;
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'avatar-stack',
                className: classNames,
              },
              others,
            ),
            overflowAmount > 0 &&
              React.createElement(
                'div',
                {
                  className: cx(uiUtilities['reset-font-smoothing'], theme['overflow']),
                  onClick: onOverflowClick,
                },
                '+'.concat(overflowAmount),
              ),
            childrenToDisplay.map(function(child, index) {
              return cloneElement(
                child,
                _objectSpread(
                  {
                    key: index,
                  },
                  child.props,
                  {
                    size: size,
                  },
                ),
              );
            }),
          );
        },
      },
    ]);

    return AvatarStack;
  })(PureComponent);

AvatarStack.defaultProps = {
  direction: 'horizontal',
  displayMax: 0,
  inverse: false,
  size: 'medium',
};
export default AvatarStack;
