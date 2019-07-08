import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

var MenuItem =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(MenuItem, _PureComponent);

    function MenuItem() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MenuItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handleClick', function(event) {
        var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

        if (onClick && !disabled) {
          onClick(event, _assertThisInitialized(_this));
        }
      });

      return _this;
    }

    _createClass(MenuItem, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props2 = this.props,
            icon = _this$props2.icon,
            caption = _this$props2.caption,
            className = _this$props2.className,
            destructive = _this$props2.destructive,
            selected = _this$props2.selected,
            disabled = _this$props2.disabled,
            others = _objectWithoutProperties(_this$props2, [
              'icon',
              'caption',
              'className',
              'destructive',
              'selected',
              'disabled',
            ]);

          var classNames = cx(
            theme['menu-item'],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-selected'], selected),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _cx),
            className,
          );
          var color = destructive ? 'ruby' : disabled ? 'neutral' : 'teal';
          var tint = disabled && destructive ? 'light' : disabled || destructive ? 'dark' : 'darkest';
          return React.createElement(
            Box,
            _extends({}, others, {
              alignItems: 'center',
              className: classNames,
              'data-teamleader-ui': 'menu-item',
              display: 'flex',
              element: 'li',
              onClick: this.handleClick,
              paddingHorizontal: 3,
            }),
            icon &&
              React.createElement(
                Icon,
                {
                  color: color,
                  tint: tint,
                  marginRight: 3,
                },
                icon,
              ),
            React.createElement(
              TextBody,
              {
                color: color,
                tint: tint,
                element: 'span',
              },
              caption,
            ),
          );
        },
      },
    ]);

    return MenuItem;
  })(PureComponent);

MenuItem.defaultProps = {
  className: '',
  destructive: false,
  disabled: false,
  selected: false,
};
export default MenuItem;
