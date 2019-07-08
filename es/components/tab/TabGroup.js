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

var TabGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(TabGroup, _PureComponent);

    function TabGroup() {
      _classCallCheck(this, TabGroup);

      return _possibleConstructorReturn(this, _getPrototypeOf(TabGroup).apply(this, arguments));
    }

    _createClass(TabGroup, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverted = _this$props.inverted,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'inverted', 'size']);

          var classNames = cx(theme['tab-group'], _defineProperty({}, theme['inverted'], inverted), className);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'tab-group',
                className: classNames,
              },
              others,
            ),
            React.Children.map(children, function(child) {
              return React.cloneElement(child, {
                size: size,
              });
            }),
          );
        },
      },
    ]);

    return TabGroup;
  })(PureComponent);

TabGroup.defaultProps = {
  inverted: false,
};
export default TabGroup;
