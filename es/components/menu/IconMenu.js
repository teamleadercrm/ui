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
import cx from 'classnames';
import { IconMoreMediumOutline } from '@teamleader/ui-icons';
import IconButton from '../button/IconButton.js';
import Menu from './Menu.js';
import theme from './theme.css';
import Box from '../box';

var IconMenu =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(IconMenu, _PureComponent);

    function IconMenu() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, IconMenu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(IconMenu)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        active: false,
      });

      _defineProperty(_assertThisInitialized(_this), 'handleButtonClick', function(event) {
        _this.setState({
          active: !_this.state.active,
        });

        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleMenuHide', function() {
        _this.setState({
          active: false,
        });

        if (_this.props.onHide) {
          _this.props.onHide();
        }
      });

      return _this;
    }

    _createClass(IconMenu, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            icon = _this$props.icon,
            onHide = _this$props.onHide,
            onSelect = _this$props.onSelect,
            onShow = _this$props.onShow,
            position = _this$props.position,
            selectable = _this$props.selectable,
            selected = _this$props.selected,
            other = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'icon',
              'onHide',
              'onSelect',
              'onShow',
              'position',
              'selectable',
              'selected',
            ]);

          var buttonIcon = icon || React.createElement(IconMoreMediumOutline, null);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'icon-menu',
              },
              other,
              {
                className: cx(theme['icon-menu'], className),
              },
            ),
            React.createElement(IconButton, {
              className: theme['icon'],
              icon: buttonIcon,
              onClick: this.handleButtonClick,
            }),
            React.createElement(
              Menu,
              {
                active: this.state.active,
                onHide: this.handleMenuHide,
                onSelect: onSelect,
                onShow: onShow,
                position: position,
                selectable: selectable,
                selected: selected,
              },
              children,
            ),
          );
        },
      },
    ]);

    return IconMenu;
  })(PureComponent);

IconMenu.defaultProps = {
  className: '',
  position: 'auto',
  selectable: false,
};
export default IconMenu;
