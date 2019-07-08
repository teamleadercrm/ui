import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Box } from '../box';
import theme from './theme.css';

var ScrollContainer =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ScrollContainer, _PureComponent);

    function ScrollContainer() {
      _classCallCheck(this, ScrollContainer);

      return _possibleConstructorReturn(this, _getPrototypeOf(ScrollContainer).apply(this, arguments));
    }

    _createClass(ScrollContainer, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            header = _this$props.header,
            body = _this$props.body,
            footer = _this$props.footer,
            others = _objectWithoutProperties(_this$props, ['className', 'header', 'body', 'footer']);

          var classNames = cx(theme['scroll-container'], className);
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                display: 'flex',
                flexDirection: 'column',
              },
              others,
            ),
            header &&
              React.createElement(
                'header',
                {
                  className: theme['scroll-container-header'],
                },
                header,
              ),
            body &&
              React.createElement(
                'div',
                {
                  className: theme['scroll-container-body'],
                },
                React.createElement(
                  Box,
                  {
                    flex: '1',
                  },
                  body,
                ),
              ),
            footer &&
              React.createElement(
                'footer',
                {
                  className: theme['scroll-container-footer'],
                },
                footer,
              ),
          );
        },
      },
    ]);

    return ScrollContainer;
  })(PureComponent);

export default ScrollContainer;
