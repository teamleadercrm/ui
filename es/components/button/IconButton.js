import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var IconButton =
  /*#__PURE__*/
  (function(_Component) {
    _inherits(IconButton, _Component);

    function IconButton() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, IconButton);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(IconButton)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handleMouseUp', function(event) {
        _this.blur();

        if (_this.props.onMouseUp) {
          _this.props.onMouseUp(event);
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleMouseLeave', function(event) {
        _this.blur();

        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      });

      return _this;
    }

    _createClass(IconButton, [
      {
        key: 'blur',
        value: function blur() {
          if (this.buttonNode.blur) {
            this.buttonNode.blur();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx,
            _this2 = this;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            element = _this$props.element,
            icon = _this$props.icon,
            size = _this$props.size,
            color = _this$props.color,
            type = _this$props.type,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'disabled',
              'element',
              'icon',
              'size',
              'color',
              'type',
            ]);

          var classNames = cx(
            uiUtilities['reset-box-sizing'],
            uiUtilities['reset-font-smoothing'],
            theme['button-base'],
            theme['button'],
            theme['icon-button'],
            theme[color],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _defineProperty(_cx, theme[size], theme[size]),
            _cx),
            className,
          );

          var props = _objectSpread({}, others, {
            ref: function ref(node) {
              _this2.buttonNode = node;
            },
            className: classNames,
            disabled: element === 'button' ? disabled : null,
            onMouseUp: this.handleMouseUp,
            onMouseLeave: this.handleMouseLeave,
            type: element === 'button' ? type : null,
            'data-teamleader-ui': 'button',
          });

          return React.createElement(element, props, icon, children);
        },
      },
    ]);

    return IconButton;
  })(Component);

IconButton.defaultProps = {
  className: '',
  element: 'button',
  size: 'medium',
  color: 'neutral',
  type: 'button',
};
export default IconButton;
