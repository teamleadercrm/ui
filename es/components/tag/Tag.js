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
import Box from '../box';
import Button, { IconButton } from '../button';
import cx from 'classnames';
import theme from './theme.css';
import { IconCloseMediumOutline, IconCloseSmallOutline } from '@teamleader/ui-icons';
import uiUtilities from '@teamleader/ui-utilities';

var Tag =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Tag, _PureComponent);

    function Tag() {
      _classCallCheck(this, Tag);

      return _possibleConstructorReturn(this, _getPrototypeOf(Tag).apply(this, arguments));
    }

    _createClass(Tag, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverse = _this$props.inverse,
            onLabelClick = _this$props.onLabelClick,
            onRemoveClick = _this$props.onRemoveClick,
            size = _this$props.size,
            color = _this$props.color,
            disabled = _this$props.disabled,
            others = _objectWithoutProperties(_this$props, [
              'children',
              'className',
              'inverse',
              'onLabelClick',
              'onRemoveClick',
              'size',
              'color',
              'disabled',
            ]);

          var classNames = cx(
            theme['tag'],
            theme['is-'.concat(size)],
            theme[color],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-removable'], onRemoveClick),
            _defineProperty(_cx, theme['is-inverse'], inverse),
            _defineProperty(_cx, theme['is-disabled'], disabled),
            _cx),
            className,
          );
          var closeButtonColor = inverse ? 'white' : 'neutral';
          var closeButtonIcon = React.createElement(IconCloseSmallOutline, null);
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
                'data-teamleader-ui': 'tag',
              },
              others,
            ),
            onLabelClick
              ? React.createElement(
                  Button,
                  {
                    className: theme['label-button'],
                    onClick: onLabelClick,
                    level: 'outline',
                    inverse: inverse,
                    disabled: disabled,
                  },
                  children,
                )
              : React.createElement(
                  'span',
                  {
                    className: cx(uiUtilities['reset-font-smoothing'], theme['label']),
                  },
                  children,
                ),
            onRemoveClick &&
              React.createElement(IconButton, {
                className: theme['remove-button'],
                color: closeButtonColor,
                icon: closeButtonIcon,
                onClick: onRemoveClick,
                size: 'small',
                disabled: disabled,
              }),
          );
        },
      },
    ]);

    return Tag;
  })(PureComponent);

Tag.defaultProps = {
  inverse: false,
  size: 'medium',
  color: 'neutral',
};
export default Tag;
