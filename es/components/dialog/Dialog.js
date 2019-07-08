import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _extends from '@babel/runtime/helpers/extends';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import cx from 'classnames';
import theme from './theme.css';
import { Banner, Box, Button, ButtonGroup, DialogBase, Heading2, Heading3, Link } from '../../index';
import { COLORS } from '../../constants';

var Dialog =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Dialog, _PureComponent);

    function Dialog() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Dialog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Dialog)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'getHeader', function() {
        var _this$props = _this.props,
          headerColor = _this$props.headerColor,
          headerIcon = _this$props.headerIcon,
          headingLevel = _this$props.headingLevel,
          onCloseClick = _this$props.onCloseClick,
          title = _this$props.title;
        return React.createElement(
          Banner,
          {
            color: headerColor,
            fullWidth: true,
            icon: headerIcon,
            onClose: onCloseClick,
          },
          headingLevel === 2 ? React.createElement(Heading2, null, title) : React.createElement(Heading3, null, title),
        );
      });

      _defineProperty(_assertThisInitialized(_this), 'getFooter', function() {
        var _this$props2 = _this.props,
          tertiaryAction = _this$props2.tertiaryAction,
          secondaryAction = _this$props2.secondaryAction,
          primaryAction = _this$props2.primaryAction;
        return React.createElement(
          ButtonGroup,
          {
            justifyContent: 'flex-end',
            padding: 4,
          },
          tertiaryAction &&
            React.createElement(
              Link,
              _extends(
                {
                  inherit: false,
                },
                tertiaryAction,
              ),
            ),
          secondaryAction && React.createElement(Button, secondaryAction),
          React.createElement(
            Button,
            _extends(
              {
                level: 'primary',
              },
              primaryAction,
            ),
          ),
        );
      });

      return _this;
    }

    _createClass(Dialog, [
      {
        key: 'render',
        value: function render() {
          var _this$props3 = this.props,
            children = _this$props3.children,
            className = _this$props3.className,
            scrollable = _this$props3.scrollable,
            title = _this$props3.title,
            otherProps = _objectWithoutProperties(_this$props3, ['children', 'className', 'scrollable', 'title']);

          var classNames = cx(theme['dialog'], className);
          var restProps = omit(otherProps, [
            'headerColor',
            'onCloseClick',
            'primaryAction',
            'secondaryAction',
            'tertiaryAction',
          ]);
          return React.createElement(
            DialogBase,
            _extends(
              {
                className: classNames,
              },
              restProps,
              {
                scrollable: false,
              },
            ),
            title && this.getHeader(),
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
            this.getFooter(),
          );
        },
      },
    ]);

    return Dialog;
  })(PureComponent);

Dialog.defaultProps = {
  headerColor: 'neutral',
  headingLevel: 3,
  scrollable: true,
};
export default Dialog;
