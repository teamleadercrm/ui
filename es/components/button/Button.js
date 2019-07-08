import _objectSpread from '@babel/runtime/helpers/objectSpread';
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
import LoadingSpinner from '../loadingSpinner';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var Button =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Button, _PureComponent);

    function Button() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Button);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)),
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

    _createClass(Button, [
      {
        key: 'getSpinnerColor',
        value: function getSpinnerColor() {
          var _this$props = this.props,
            inverse = _this$props.inverse,
            level = _this$props.level;

          switch (level) {
            case 'secondary':
              return 'teal';

            case 'outline':
              return inverse ? 'neutral' : 'teal';

            case 'link':
              return inverse ? 'neutral' : 'aqua';

            default:
              return 'neutral';
          }
        },
      },
      {
        key: 'getSpinnerTint',
        value: function getSpinnerTint() {
          var _this$props2 = this.props,
            inverse = _this$props2.inverse,
            level = _this$props2.level;

          switch (level) {
            case 'secondary':
              return 'darkest';

            case 'outline':
              return inverse ? 'lightest' : 'darkest';

            case 'link':
              return inverse ? 'lightest' : 'dark';

            default:
              return 'lightest';
          }
        },
      },
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

          var _this$props3 = this.props,
            children = _this$props3.children,
            className = _this$props3.className,
            level = _this$props3.level,
            disabled = _this$props3.disabled,
            element = _this$props3.element,
            active = _this$props3.active,
            fullWidth = _this$props3.fullWidth,
            icon = _this$props3.icon,
            iconPlacement = _this$props3.iconPlacement,
            inverse = _this$props3.inverse,
            label = _this$props3.label,
            size = _this$props3.size,
            type = _this$props3.type,
            processing = _this$props3.processing,
            others = _objectWithoutProperties(_this$props3, [
              'children',
              'className',
              'level',
              'disabled',
              'element',
              'active',
              'fullWidth',
              'icon',
              'iconPlacement',
              'inverse',
              'label',
              'size',
              'type',
              'processing',
            ]);

          var classNames = cx(
            uiUtilities['reset-box-sizing'],
            uiUtilities['reset-font-smoothing'],
            theme['button-base'],
            theme['button'],
            theme[level],
            ((_cx = {}),
            _defineProperty(
              _cx,
              theme['has-icon-only'],
              (!children && !label) || (Array.isArray(children) && !children[0] && !label),
            ),
            _defineProperty(_cx, theme['is-inverse'], inverse && (level === 'outline' || level === 'link')),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _defineProperty(_cx, theme['is-full-width'], fullWidth),
            _defineProperty(_cx, theme['is-processing'], processing),
            _defineProperty(_cx, theme['is-active'], active),
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

          return React.createElement(
            element,
            props,
            icon && iconPlacement === 'left' && icon,
            (label || children) && React.createElement('span', null, label, children),
            icon && iconPlacement === 'right' && icon,
            processing &&
              React.createElement(LoadingSpinner, {
                className: theme['spinner'],
                color: this.getSpinnerColor(),
                size: size === 'small' ? 'small' : 'medium',
                tint: this.getSpinnerTint(),
              }),
          );
        },
      },
    ]);

    return Button;
  })(PureComponent);

Button.defaultProps = {
  className: '',
  element: 'button',
  fullWidth: false,
  level: 'secondary',
  iconPlacement: 'left',
  inverse: false,
  processing: false,
  size: 'medium',
  type: 'button',
};
export default Button;
