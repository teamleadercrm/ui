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
import { ButtonGroup } from '../button';
import cx from 'classnames';
import theme from './theme.css';

var Message =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Message, _PureComponent);

    function Message() {
      _classCallCheck(this, Message);

      return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
    }

    _createClass(Message, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            image = _this$props.image,
            imagePositioning = _this$props.imagePositioning,
            button = _this$props.button,
            link = _this$props.link,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'children',
              'image',
              'imagePositioning',
              'button',
              'link',
            ]);

          var classNames = cx(theme['message'], theme['is-image-'.concat(imagePositioning)], className);
          var hasAction = Boolean(button || link);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'message',
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
                flex: '2',
              },
              children,
              hasAction &&
                React.createElement(
                  ButtonGroup,
                  {
                    justifyContent: imagePositioning === 'center' ? 'center' : 'flex-end',
                    marginTop: 4,
                  },
                  link,
                  button,
                ),
            ),
          );
        },
      },
    ]);

    return Message;
  })(PureComponent);

Message.defaultProps = {
  imagePositioning: 'left',
};
export default Message;
