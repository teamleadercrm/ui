import _extends from '@babel/runtime/helpers/extends';
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
import RadioButton from './index';
import Box from '../box';
import isComponentOfType from '../utils/is-component-of-type';
import omit from 'lodash.omit';

var RadioGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(RadioGroup, _PureComponent);

    function RadioGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RadioGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(RadioGroup)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handleChange', function(value, event) {
        if (_this.props.onChange) {
          _this.props.onChange(value, event);
        }
      });

      return _this;
    }

    _createClass(RadioGroup, [
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            value = _this$props.value,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'disabled', 'value']);

          var rest = omit(others, ['onChange']);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'radio-group',
                className: className,
              },
              rest,
            ),
            React.Children.map(children, function(child) {
              return !isComponentOfType(RadioButton, child)
                ? child
                : React.cloneElement(child, {
                    checked: child.props.value === value,
                    disabled: disabled || child.props.disabled,
                    onChange: function onChange(event) {
                      return _this2.handleChange(child.props.value, event);
                    },
                  });
            }),
          );
        },
      },
    ]);

    return RadioGroup;
  })(PureComponent);

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
};
export default RadioGroup;
