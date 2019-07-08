import _extends from '@babel/runtime/helpers/extends';
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
import Avatar from '../avatar';
import Box from '../box';
import Link from '../link';
import Popover from '../popover';
import { Heading3, TextBody } from '../typography';

var EmptyPassport =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(EmptyPassport, _PureComponent);

    function EmptyPassport() {
      _classCallCheck(this, EmptyPassport);

      return _possibleConstructorReturn(this, _getPrototypeOf(EmptyPassport).apply(this, arguments));
    }

    _createClass(EmptyPassport, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            avatar = _this$props.avatar,
            link = _this$props.link,
            className = _this$props.className,
            description = _this$props.description,
            title = _this$props.title,
            others = _objectWithoutProperties(_this$props, ['avatar', 'link', 'className', 'description', 'title']);

          return React.createElement(
            Popover,
            _extends({}, others, {
              backdrop: 'transparent',
              className: cx(theme['passport-empty'], className),
            }),
            React.createElement(
              Box,
              {
                paddingHorizontal: 4,
                paddingVertical: 5,
              },
              React.createElement(
                Box,
                {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
                avatar &&
                  React.createElement(
                    Avatar,
                    _extends({}, avatar, {
                      size: 'small',
                      marginBottom: 4,
                    }),
                  ),
                React.createElement(
                  Heading3,
                  {
                    color: 'teal',
                  },
                  title,
                ),
                description &&
                  React.createElement(
                    TextBody,
                    {
                      color: 'neutral',
                      marginTop: 2,
                    },
                    description,
                  ),
                link &&
                  React.createElement(
                    TextBody,
                    {
                      marginTop: 4,
                    },
                    React.createElement(
                      Link,
                      _extends({}, link, {
                        inherit: false,
                      }),
                    ),
                  ),
              ),
            ),
          );
        },
      },
    ]);

    return EmptyPassport;
  })(PureComponent);

export default EmptyPassport;
