import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Button, { IconButton } from '../button';
import Overlay from '../overlay';
import { IconArrowRightSmallOutline } from '@teamleader/ui-icons';
import Box from '../box';

var QTip =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(QTip, _PureComponent);

    function QTip() {
      _classCallCheck(this, QTip);

      return _possibleConstructorReturn(this, _getPrototypeOf(QTip).apply(this, arguments));
    }

    _createClass(QTip, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            active = _this$props.active,
            children = _this$props.children,
            highlighted = _this$props.highlighted,
            icon = _this$props.icon,
            onChange = _this$props.onChange,
            onEscKeyDown = _this$props.onEscKeyDown,
            onOverlayClick = _this$props.onOverlayClick,
            onOverlayMouseDown = _this$props.onOverlayMouseDown,
            onOverlayMouseMove = _this$props.onOverlayMouseMove,
            onOverlayMouseUp = _this$props.onOverlayMouseUp,
            others = _objectWithoutProperties(_this$props, [
              'active',
              'children',
              'highlighted',
              'icon',
              'onChange',
              'onEscKeyDown',
              'onOverlayClick',
              'onOverlayMouseDown',
              'onOverlayMouseMove',
              'onOverlayMouseUp',
            ]);

          var classNames = cx(
            theme['container'],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-active'], active),
            _defineProperty(_cx, theme['is-highlighted'], highlighted),
            _cx),
          );
          var level = highlighted ? 'primary' : 'secondary';
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
              },
              others,
            ),
            React.createElement(Overlay, {
              active: active,
              onClick: onOverlayClick,
              onEscKeyDown: onEscKeyDown,
              onMouseDown: onOverlayMouseDown,
              onMouseMove: onOverlayMouseMove,
              onMouseUp: onOverlayMouseUp,
            }),
            React.createElement(
              'div',
              {
                className: theme['qtip'],
              },
              React.createElement(Button, {
                className: theme['icon'],
                level: level,
                onClick: onChange,
                icon: icon,
              }),
              React.createElement(
                'div',
                {
                  className: theme['inner-container'],
                },
                React.createElement(
                  'div',
                  {
                    className: theme['content'],
                  },
                  children,
                ),
                React.createElement(IconButton, {
                  className: theme['close-button'],
                  size: 'small',
                  onClick: onChange,
                  icon: React.createElement(IconArrowRightSmallOutline, null),
                }),
              ),
            ),
          );
        },
      },
    ]);

    return QTip;
  })(PureComponent);

QTip.defaultProps = {
  active: false,
};
export default QTip;
