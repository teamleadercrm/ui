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
import Box from '../box';
import Icon from '../icon';
import { colorsWithout } from '../../constants';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

var Badge =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Badge, _PureComponent);

    function Badge() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Badge);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Badge)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'badgeNode', createRef());

      _defineProperty(_assertThisInitialized(_this), 'handleMouseUp', function(event) {
        _this.badgeNode.current.boxNode.current.blur();

        if (_this.props.onMouseUp) {
          _this.props.onMouseUp(event);
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleMouseLeave', function(event) {
        _this.badgeNode.current.boxNode.current.blur();

        if (_this.props.onMouseLeave) {
          _this.props.onMouseLeave(event);
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'renderIcon', function() {
        var _this$props = _this.props,
          color = _this$props.color,
          icon = _this$props.icon,
          inverse = _this$props.inverse;
        return React.createElement(
          Icon,
          {
            className: theme['icon'],
            color: color === 'neutral' ? 'teal' : color,
            tint: inverse ? 'lightest' : 'darkest',
          },
          icon,
        );
      });

      return _this;
    }

    _createClass(Badge, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            disabled = _this$props2.disabled,
            element = _this$props2.element,
            icon = _this$props2.icon,
            iconPlacement = _this$props2.iconPlacement,
            inherit = _this$props2.inherit,
            inverse = _this$props2.inverse,
            color = _this$props2.color,
            others = _objectWithoutProperties(_this$props2, [
              'children',
              'className',
              'disabled',
              'element',
              'icon',
              'iconPlacement',
              'inherit',
              'inverse',
              'color',
            ]);

          var classNames = cx(
            theme['badge'],
            theme[color],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _defineProperty(_cx, theme['is-inherit'], inherit),
            _defineProperty(_cx, theme['is-inverse'], inverse),
            _cx),
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                'data-teamleader-ui': 'badge',
                element: element,
                ref: this.badgeNode,
                onMouseUp: this.handleMouseUp,
                onMouseLeave: this.handleMouseLeave,
                paddingHorizontal: 2,
                paddingVertical: 1,
              },
              others,
            ),
            icon && iconPlacement === 'left' && this.renderIcon(),
            inherit
              ? React.createElement(
                  'span',
                  {
                    className: theme['label'],
                  },
                  children,
                )
              : React.createElement(
                  TextBody,
                  {
                    className: theme['label'],
                    element: 'span',
                  },
                  children,
                ),
            icon && iconPlacement === 'right' && this.renderIcon(),
          );
        },
      },
    ]);

    return Badge;
  })(PureComponent);

Badge.defaultProps = {
  disabled: false,
  element: 'button',
  iconPlacement: 'left',
  inherit: true,
  inverse: false,
  color: 'neutral',
};
export default Badge;
