import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createRef, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var Link =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Link, _PureComponent);

    function Link() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Link);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'linkNode', createRef());

      _defineProperty(_assertThisInitialized(_this), 'handleMouseUp', function(event) {
        var onMouseUp = _this.props.onMouseUp;

        _this.blur();

        onMouseUp && onMouseUp(event);
      });

      _defineProperty(_assertThisInitialized(_this), 'handleMouseLeave', function(event) {
        var onMouseLeave = _this.props.onMouseLeave;

        _this.blur();

        onMouseLeave && onMouseLeave(event);
      });

      return _this;
    }

    _createClass(Link, [
      {
        key: 'blur',
        value: function blur() {
          if (this.linkNode.current.blur) {
            this.linkNode.current.blur();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            icon = _this$props.icon,
            iconPlacement = _this$props.iconPlacement,
            element = _this$props.element,
            inherit = _this$props.inherit,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'disabled',
              'icon',
              'iconPlacement',
              'element',
              'inherit',
            ]);

          var classNames = cx(
            uiUtilities['reset-font-smoothing'],
            theme['link'],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _defineProperty(_cx, theme['inherit'], inherit),
            _defineProperty(_cx, theme['has-icon'], icon),
            _cx),
            className,
          );
          var ChildrenWrapper = icon ? 'span' : Fragment;
          var Element = element;
          return React.createElement(
            Element,
            _extends(
              {
                ref: this.linkNode,
                className: classNames,
                'data-teamleader-ui': 'link',
                onMouseUp: this.handleMouseUp,
                onMouseLeave: this.handleMouseLeave,
              },
              others,
            ),
            icon && iconPlacement === 'left' && icon,
            React.createElement(ChildrenWrapper, null, children),
            icon && iconPlacement === 'right' && icon,
          );
        },
      },
    ]);

    return Link;
  })(PureComponent);

Link.defaultProps = {
  className: '',
  disabled: false,
  element: 'a',
  inherit: true,
};
export default Link;
