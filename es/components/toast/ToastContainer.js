import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';
import cx from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

var ToastContainer =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ToastContainer, _PureComponent);

    function ToastContainer() {
      _classCallCheck(this, ToastContainer);

      return _possibleConstructorReturn(this, _getPrototypeOf(ToastContainer).apply(this, arguments));
    }

    _createClass(ToastContainer, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className;
          var classNames = cx(theme['container'], className);
          return React.createElement(
            'ul',
            {
              className: classNames,
              'data-teamleader-ui': 'toast-container',
            },
            React.createElement(
              TransitionGroup,
              {
                component: 'li',
              },
              React.Children.map(children, function(child) {
                return React.createElement(
                  CSSTransition,
                  {
                    timeout: 1000,
                    key: child.key,
                    classNames: {
                      appear: cx(theme['appear']),
                      appearActive: cx(theme['appear-active']),
                      enter: cx(theme['enter']),
                      enterActive: cx(theme['enter-active']),
                      enterDone: cx(theme['enter-done']),
                      exit: cx(theme['exit']),
                      exitActive: cx(theme['exit-active']),
                      exitDone: cx(theme['exit-done']),
                    },
                  },
                  child,
                );
              }),
            ),
          );
        },
      },
    ]);

    return ToastContainer;
  })(PureComponent);

export default ToastContainer;
