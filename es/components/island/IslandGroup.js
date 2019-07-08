import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box, { pickBoxProps } from '../box';
import theme from './theme.css';

var IslandGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(IslandGroup, _PureComponent);

    function IslandGroup() {
      _classCallCheck(this, IslandGroup);

      return _possibleConstructorReturn(this, _getPrototypeOf(IslandGroup).apply(this, arguments));
    }

    _createClass(IslandGroup, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            color = _this$props.color,
            dark = _this$props.dark,
            direction = _this$props.direction,
            size = _this$props.size,
            otherProps = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'color',
              'dark',
              'direction',
              'size',
            ]);

          var boxProps = pickBoxProps(otherProps);
          var classNames = cx(theme['direction-'.concat(direction)], theme['island-group'], className);
          return React.createElement(
            Box,
            _extends({}, boxProps, {
              className: classNames,
            }),
            React.Children.map(children, function(child) {
              return React.cloneElement(
                child,
                _objectSpread({}, child.props, {
                  color: color || child.props.color,
                  dark: dark || child.props.dark,
                  size: size || child.props.size,
                }),
              );
            }),
          );
        },
      },
    ]);

    return IslandGroup;
  })(PureComponent);

IslandGroup.defaultProps = {
  direction: 'horizontal',
};
export default IslandGroup;
