import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';

var IconTab =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(IconTab, _PureComponent);

    function IconTab() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, IconTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(IconTab)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'tabNode', createRef());

      _defineProperty(_assertThisInitialized(_this), 'handleClick', function(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (event.pageX !== 0 && event.pageY !== 0) {
          _this.blur();
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'blur', function() {
        if (_this.tabNode.current.boxNode.current) {
          _this.tabNode.current.boxNode.current.blur();
        }
      });

      return _this;
    }

    _createClass(IconTab, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            active = _this$props.active,
            className = _this$props.className,
            _this$props$counter = _this$props.counter,
            counter = _this$props$counter === void 0 ? null : _this$props$counter,
            icon = _this$props.icon,
            others = _objectWithoutProperties(_this$props, ['active', 'className', 'counter', 'icon']);

          var classNames = cx(theme['icon-tab'], _defineProperty({}, theme['is-active'], active), className);
          var rest = omit(others, ['onClick']);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'icon-tab',
                className: classNames,
                paddingHorizontal: 3,
                paddingVertical: 4,
                ref: this.tabNode,
                onClick: this.handleClick,
              },
              rest,
            ),
            React.cloneElement(icon, {
              element: 'span',
            }),
            counter &&
              React.cloneElement(counter, {
                className: theme['counter'],
              }),
          );
        },
      },
    ]);

    return IconTab;
  })(PureComponent);

IconTab.defaultProps = {
  element: 'a',
  active: false,
};
export default IconTab;
