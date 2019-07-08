import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Avatar from '../avatar';
import Box from '../box';
import Icon from '../icon';
import Link from '../link';
import Popover from '../popover';
import { Heading3, TextBody } from '../typography';

var Passport =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Passport, _PureComponent);

    function Passport() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Passport);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Passport)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'renderDescription', function() {
        var description = _this.props.description;

        if (!description) {
          return null;
        }

        if (Array.isArray(description)) {
          return React.createElement(
            Fragment,
            null,
            description.map(function(child, index) {
              return React.createElement(
                TextBody,
                {
                  color: 'teal',
                  key: index,
                },
                child,
              );
            }),
          );
        } else {
          return React.createElement(
            TextBody,
            {
              color: 'teal',
            },
            description,
          );
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'renderTitle', function() {
        var title = _this.props.title;
        return React.createElement(
          Heading3,
          {
            className: cx(theme['prevent-overflow'], theme['prevent-wrap'], theme['show-ellipsis']),
            color: 'teal',
          },
          typeof title === 'string'
            ? title
            : React.createElement(
                Link,
                _extends({}, title, {
                  inherit: false,
                }),
              ),
        );
      });

      return _this;
    }

    _createClass(Passport, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            avatar = _this$props.avatar,
            className = _this$props.className,
            lineItems = _this$props.lineItems,
            others = _objectWithoutProperties(_this$props, ['avatar', 'className', 'lineItems']);

          return React.createElement(
            Popover,
            _extends({}, others, {
              backdrop: 'transparent',
              className: cx(theme['passport'], className),
            }),
            React.createElement(
              Box,
              {
                padding: 3,
              },
              React.createElement(
                Box,
                {
                  display: 'flex',
                },
                React.createElement(
                  Box,
                  {
                    flex: '48px 0 0',
                    paddingRight: 3,
                  },
                  React.createElement(
                    Avatar,
                    _extends({}, avatar, {
                      size: 'small',
                    }),
                  ),
                ),
                React.createElement(
                  Box,
                  {
                    className: theme['prevent-overflow'],
                  },
                  this.renderTitle(),
                  this.renderDescription(),
                ),
              ),
              lineItems &&
                React.createElement(
                  Box,
                  {
                    marginTop: 3,
                  },
                  lineItems.map(function(_ref, index) {
                    var icon = _ref.icon,
                      lineItem = _objectWithoutProperties(_ref, ['icon']);

                    return React.createElement(
                      Box,
                      {
                        alignItems: 'flex-start',
                        display: 'flex',
                        key: index,
                      },
                      React.createElement(
                        Box,
                        {
                          display: 'flex',
                          flex: '48px 0 0',
                          justifyContent: 'center',
                          paddingRight: 3,
                        },
                        icon &&
                          React.createElement(
                            Icon,
                            {
                              color: lineItem.href || lineItem.onClick ? 'aqua' : 'teal',
                              tint: lineItem.href || lineItem.onClick ? 'dark' : 'darkest',
                              marginTop: 1,
                            },
                            icon,
                          ),
                      ),
                      React.createElement(
                        TextBody,
                        {
                          className: cx(theme['prevent-overflow'], theme['prevent-wrap'], theme['show-ellipsis']),
                          color: 'teal',
                        },
                        lineItem.href || lineItem.onClick
                          ? React.createElement(
                              Link,
                              _extends({}, lineItem, {
                                inherit: false,
                              }),
                            )
                          : lineItem.children,
                      ),
                    );
                  }),
                ),
            ),
          );
        },
      },
    ]);

    return Passport;
  })(PureComponent);

export default Passport;
