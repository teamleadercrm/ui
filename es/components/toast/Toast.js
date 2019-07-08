import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { IconButton } from '../button';
import Link from '../link';
import { TextBody } from '../typography';
import LoadingSpinner from '../loadingSpinner';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var Toast =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Toast, _PureComponent);

    function Toast() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Toast);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Toast)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'scheduleTimeout', function(props) {
        var onTimeout = props.onTimeout,
          timeout = props.timeout;

        if (_this.currentTimeout) {
          clearTimeout(_this.currentTimeout);
        }

        _this.currentTimeout = setTimeout(function() {
          if (onTimeout) {
            onTimeout();
          }

          _this.currentTimeout = null;
        }, timeout);
      });

      _defineProperty(_assertThisInitialized(_this), 'renderCustomAction', function() {
        var _this$props = _this.props,
          action = _this$props.action,
          actionLabel = _this$props.actionLabel;
        return (
          action &&
          React.createElement(
            Link,
            {
              className: theme['action-link'],
              onClick: action,
            },
            actionLabel,
          )
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'renderCustomLink', function() {
        var link = _this.props.link;
        return (
          link &&
          React.createElement(
            TextBody,
            null,
            React.cloneElement(link, {
              className: cx(link.props.className, theme['action-link']),
            }),
          )
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'renderCloseButton', function() {
        var onClose = _this.props.onClose;
        return (
          onClose &&
          React.createElement(IconButton, {
            className: theme['action-button'],
            icon: React.createElement(IconCloseMediumOutline, null),
            color: 'white',
            onClick: onClose,
          })
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'handleMouseEnter', function() {
        if (_this.props.timeout) {
          clearTimeout(_this.currentTimeout);
          _this.currentTimeout = null;
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleMouseLeave', function() {
        if (_this.props.timeout) {
          _this.scheduleTimeout(_this.props);
        }
      });

      return _this;
    }

    _createClass(Toast, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.timeout) {
            this.scheduleTimeout(this.props);
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          clearTimeout(this.currentTimeout);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            label = _this$props2.label,
            processing = _this$props2.processing;
          var classNames = cx(
            uiUtilities['reset-box-sizing'],
            uiUtilities['box-shadow-400'],
            theme['toast'],
            className,
          );
          return React.createElement(
            'div',
            {
              'data-teamleader-ui': 'toast',
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
              className: classNames,
            },
            processing &&
              React.createElement(LoadingSpinner, {
                className: theme['spinner'],
                color: 'neutral',
                tint: 'lightest',
              }),
            React.createElement(
              TextBody,
              {
                className: theme['label'],
                color: 'neutral',
                tint: 'lightest',
                element: 'div',
              },
              label,
              children,
            ),
            this.renderCustomAction() || this.renderCustomLink() || this.renderCloseButton(),
          );
        },
      },
    ]);

    return Toast;
  })(PureComponent);

export default Toast;
