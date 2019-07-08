import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import Overlay from '../overlay/Overlay';
import Transition from 'react-transition-group/Transition';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var DialogBase =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(DialogBase, _PureComponent);

    function DialogBase() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DialogBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(DialogBase)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'dialogRoot', document.createElement('div'));

      return _this;
    }

    _createClass(DialogBase, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.body.appendChild(this.dialogRoot);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          document.body.removeChild(this.dialogRoot);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            active = _this$props.active,
            backdrop = _this$props.backdrop,
            children = _this$props.children,
            className = _this$props.className,
            onEscKeyDown = _this$props.onEscKeyDown,
            onOverlayClick = _this$props.onOverlayClick,
            onOverlayMouseDown = _this$props.onOverlayMouseDown,
            onOverlayMouseMove = _this$props.onOverlayMouseMove,
            onOverlayMouseUp = _this$props.onOverlayMouseUp,
            scrollable = _this$props.scrollable,
            size = _this$props.size;

          if (!active) {
            return null;
          }

          var dialogClassNames = cx(
            uiUtilities['box-shadow-300'],
            theme['dialog-base'],
            theme['is-'.concat(size)],
            className,
          );
          var dialog = React.createElement(
            Transition,
            {
              timeout: 0,
              in: active,
              appear: true,
            },
            function(state) {
              var _cx;

              return React.createElement(
                'div',
                {
                  className: cx(
                    theme['wrapper'],
                    ((_cx = {}),
                    _defineProperty(_cx, theme['is-entering'], state === 'entering'),
                    _defineProperty(_cx, theme['is-entered'], state === 'entered'),
                    _cx),
                  ),
                },
                React.createElement(Overlay, {
                  active: active,
                  backdrop: backdrop,
                  className: theme['overlay'],
                  onClick: onOverlayClick,
                  onEscKeyDown: onEscKeyDown,
                  onMouseDown: onOverlayMouseDown,
                  onMouseMove: onOverlayMouseMove,
                  onMouseUp: onOverlayMouseUp,
                }),
                React.createElement(
                  'div',
                  {
                    'data-teamleader-ui': 'dialog',
                    className: dialogClassNames,
                  },
                  React.createElement(
                    'div',
                    {
                      className: theme['inner'],
                    },
                    scrollable
                      ? React.createElement(
                          Box,
                          {
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                          },
                          children,
                        )
                      : children,
                  ),
                ),
              );
            },
          );
          return createPortal(dialog, this.dialogRoot);
        },
      },
    ]);

    return DialogBase;
  })(PureComponent);

DialogBase.defaultProps = {
  active: false,
  backdrop: 'dark',
  scrollable: true,
  size: 'medium',
};
export default DialogBase;
