import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
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
import Box, { omitBoxProps } from '../box';
import Button from './Button';
import cx from 'classnames';
import isComponentOfType from '../utils/is-component-of-type';
import theme from './theme.css';

var ButtonGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ButtonGroup, _PureComponent);

    function ButtonGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ButtonGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(ButtonGroup)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handleChange', function(value, event) {
        if (_this.props.onChange) {
          _this.props.onChange(value, event);
        }
      });

      return _this;
    }

    _createClass(ButtonGroup, [
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            segmented = _this$props.segmented,
            value = _this$props.value,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'segmented', 'value']);

          var classNames = cx(theme['group'], _defineProperty({}, theme['segmented'], segmented), className);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'button-group',
                className: classNames,
              },
              others,
            ),
            React.Children.map(children, function(child) {
              if (!isComponentOfType(Button, child)) {
                return child;
              }

              var optionalChildProps = {};

              if (value) {
                optionalChildProps = {
                  active: child.props.value === value,
                  onClick: function onClick(event) {
                    return _this2.handleChange(child.props.value, event);
                  },
                };
              }

              var childProps = omit(child.props, ['value']);
              var groupProps = omit(others, ['onChange']);
              return React.createElement(
                child.type,
                _objectSpread({}, childProps, optionalChildProps, omitBoxProps(groupProps)),
              );
            }),
          );
        },
      },
    ]);

    return ButtonGroup;
  })(PureComponent);

ButtonGroup.defaultProps = {
  segmented: false,
};
export default ButtonGroup;
