import _extends from '@babel/runtime/helpers/extends';
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

var CompactMessage =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(CompactMessage, _PureComponent);

    function CompactMessage() {
      _classCallCheck(this, CompactMessage);

      return _possibleConstructorReturn(this, _getPrototypeOf(CompactMessage).apply(this, arguments));
    }

    _createClass(CompactMessage, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            image = _this$props.image,
            button = _this$props.button,
            others = _objectWithoutProperties(_this$props, ['className', 'children', 'image', 'button']);

          var classNames = cx(theme['compact-message'], className);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'compact-message',
                className: classNames,
              },
              others,
            ),
            image &&
              React.createElement(
                'div',
                {
                  className: theme['image'],
                },
                image,
              ),
            React.createElement(
              Box,
              {
                display: 'flex',
                flexDirection: 'column',
              },
              React.createElement(
                'div',
                {
                  className: theme['content'],
                },
                children,
              ),
              button &&
                React.createElement(
                  'div',
                  {
                    className: theme['button'],
                  },
                  button,
                ),
            ),
          );
        },
      },
    ]);

    return CompactMessage;
  })(PureComponent);

export default CompactMessage;
