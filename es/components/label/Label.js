import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
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
import { TextBody, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';
import cx from 'classnames';

var Label =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Label, _PureComponent);

    function Label() {
      _classCallCheck(this, Label);

      return _possibleConstructorReturn(this, _getPrototypeOf(Label).apply(this, arguments));
    }

    _createClass(Label, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            connectedLeft = _this$props.connectedLeft,
            connectedRight = _this$props.connectedRight,
            className = _this$props.className,
            inverse = _this$props.inverse,
            helpText = _this$props.helpText,
            required = _this$props.required,
            size = _this$props.size,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'connectedLeft',
              'connectedRight',
              'className',
              'inverse',
              'helpText',
              'required',
              'size',
            ]);

          var childProps = {
            inverse: inverse,
            marginTop: 1,
            size: size,
          };
          var classNames = cx(theme['label'], _defineProperty({}, theme['is-inverse'], inverse), className);
          var Element = size === 'large' ? TextDisplay : TextBody;
          return React.createElement(
            Box,
            _extends(
              {
                element: 'label',
                marginBottom: 3,
                className: classNames,
              },
              others,
            ),
            React.Children.map(children, function(child) {
              if (typeof child !== 'string') {
                return React.cloneElement(child, _objectSpread({}, childProps, child.props));
              }

              return React.createElement(
                Box,
                {
                  display: 'flex',
                  alignItems: 'center',
                },
                connectedLeft &&
                  React.createElement(
                    Box,
                    {
                      element: 'span',
                      marginRight: 1,
                    },
                    connectedLeft,
                  ),
                React.createElement(
                  Element,
                  {
                    color: inverse ? 'neutral' : 'teal',
                    tint: inverse ? 'lightest' : 'darkest',
                    element: 'span',
                  },
                  child,
                ),
                !required &&
                  React.createElement(
                    TextSmall,
                    {
                      color: inverse ? 'teal' : 'neutral',
                      element: 'span',
                      marginLeft: 1,
                      tint: inverse ? 'light' : 'darkest',
                    },
                    helpText,
                  ),
                connectedRight &&
                  React.createElement(
                    Box,
                    {
                      element: 'span',
                      marginLeft: 1,
                    },
                    connectedRight,
                  ),
              );
            }),
          );
        },
      },
    ]);

    return Label;
  })(PureComponent);

export { Label as default };
Label.defaultProps = {
  inverse: false,
  helpText: 'Optional',
  required: false,
  size: 'medium',
};
