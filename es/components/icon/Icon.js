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

var Icon =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Icon, _PureComponent);

    function Icon() {
      _classCallCheck(this, Icon);

      return _possibleConstructorReturn(this, _getPrototypeOf(Icon).apply(this, arguments));
    }

    _createClass(Icon, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            tint = _this$props.tint,
            opacity = _this$props.opacity,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'color', 'tint', 'opacity']);

          var classNames = cx(theme[color], theme[tint], className);
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                alignItems: 'center',
                'data-teamleader-ui': 'icon',
                display: 'flex',
                element: 'span',
              },
              others,
            ),
            React.Children.map(children, function(child) {
              // Check if child is an actual React component
              // if so, pass the needed props. If not, just render it.
              if (!child.type) {
                return child;
              }

              return React.cloneElement(child, {
                opacity: opacity,
              });
            }),
          );
        },
      },
    ]);

    return Icon;
  })(PureComponent);

Icon.defaultProps = {
  color: 'teal',
  tint: 'normal',
  opacity: 0.84,
};
export default Icon;
