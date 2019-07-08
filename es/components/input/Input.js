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
import SingleLineInputBase from './SingleLineInputBase';

var Input =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Input, _PureComponent);

    function Input() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Input);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'state', {
        value: '',
      });

      return _this;
    }

    _createClass(
      Input,
      [
        {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var _this$props = this.props,
              _onChange = _this$props.onChange,
              others = _objectWithoutProperties(_this$props, ['onChange']);

            return React.createElement(
              SingleLineInputBase,
              _extends(
                {
                  value: this.state.value,
                  onChange: function onChange(event) {
                    _this2.setState({
                      value: event.currentTarget.value,
                    });

                    _onChange && _onChange(event, event.currentTarget.value);
                  },
                },
                others,
              ),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.value !== undefined) {
              var newValue = nextProps.value || '';

              if (newValue !== prevState.value) {
                return {
                  value: newValue,
                };
              }
            }

            return null;
          },
        },
      ],
    );

    return Input;
  })(PureComponent);

Input.defaultProps = {
  type: 'text',
};
export default Input;
