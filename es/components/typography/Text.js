import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import Box from '../box';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../constants';
import theme from './theme.css';

var factory = function factory(baseType, type, defaultElement) {
  var Text =
    /*#__PURE__*/
    (function(_PureComponent) {
      _inherits(Text, _PureComponent);

      function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, _getPrototypeOf(Text).apply(this, arguments));
      }

      _createClass(Text, [
        {
          key: 'render',
          value: function render() {
            var _this$props = this.props,
              children = _this$props.children,
              className = _this$props.className,
              color = _this$props.color,
              element = _this$props.element,
              tint = _this$props.tint,
              others = _objectWithoutProperties(_this$props, ['children', 'className', 'color', 'element', 'tint']);

            var classNames = cx(theme[baseType], theme[type], theme[color], theme[tint], className);
            var Element = element || defaultElement;
            return React.createElement(
              Box,
              _extends(
                {
                  className: classNames,
                  'data-teamleader-ui': baseType,
                  element: Element,
                },
                others,
              ),
              children,
            );
          },
        },
      ]);

      return Text;
    })(PureComponent);

  Text.defaultProps = {
    element: null,
    tint: 'darkest',
  };
  return Text;
};

export { factory as textFactory };
