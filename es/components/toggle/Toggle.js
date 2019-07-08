import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import omit from 'lodash.omit';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { TextBody, TextDisplay, TextSmall } from '../typography';

var Toggle =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Toggle, _PureComponent);

    function Toggle() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Toggle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Toggle)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'inputNode', createRef());

      _defineProperty(_assertThisInitialized(_this), 'handleToggle', function(event) {
        var _this$props = _this.props,
          disabled = _this$props.disabled,
          checked = _this$props.checked,
          onChange = _this$props.onChange;

        if (event.pageX !== 0 && event.pageY !== 0) {
          _this.blur();
        }

        if (!disabled && onChange) {
          onChange(!checked, event);
        }
      });

      return _this;
    }

    _createClass(Toggle, [
      {
        key: 'blur',
        value: function blur() {
          if (this.inputNode.current) {
            this.inputNode.current.blur();
          }
        },
      },
      {
        key: 'focus',
        value: function focus() {
          if (this.inputNode.current) {
            this.inputNode.current.focus();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props2 = this.props,
            checked = _this$props2.checked,
            disabled = _this$props2.disabled,
            className = _this$props2.className,
            size = _this$props2.size,
            label = _this$props2.label,
            children = _this$props2.children,
            others = _objectWithoutProperties(_this$props2, [
              'checked',
              'disabled',
              'className',
              'size',
              'label',
              'children',
            ]);

          var restProps = omit(others, ['onChange']);
          var boxProps = pickBoxProps(restProps);
          var inputProps = omitBoxProps(restProps);
          var classNames = cx(
            theme['toggle'],
            theme['is-'.concat(size)],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-checked'], checked),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _cx),
            className,
          );
          var TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBody : TextDisplay;
          return React.createElement(
            Box,
            _extends(
              {
                element: 'label',
                'data-teamleader-ui': 'toggle',
                className: classNames,
              },
              boxProps,
            ),
            React.createElement(
              'input',
              _extends(
                {
                  className: theme['input'],
                  type: 'checkbox',
                  checked: checked,
                  disabled: disabled,
                  onClick: this.handleToggle,
                  ref: this.inputNode,
                  readOnly: true,
                },
                inputProps,
              ),
            ),
            React.createElement(
              'span',
              {
                className: theme['track'],
              },
              React.createElement('span', {
                className: theme['thumb'],
              }),
            ),
            (label || children) &&
              React.createElement(
                'span',
                {
                  className: theme['label'],
                },
                label &&
                  React.createElement(
                    TextElement,
                    {
                      element: 'span',
                      color: disabled ? 'neutral' : 'teal',
                    },
                    label,
                  ),
                children,
              ),
          );
        },
      },
    ]);

    return Toggle;
  })(PureComponent);

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  size: 'medium',
};
export default Toggle;
