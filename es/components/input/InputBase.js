import _objectSpread from '@babel/runtime/helpers/objectSpread';
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
import omit from 'lodash.omit';
import { omitBoxProps } from '../box';
import theme from './theme.css';

var InputBase =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(InputBase, _PureComponent);

    function InputBase() {
      _classCallCheck(this, InputBase);

      return _possibleConstructorReturn(this, _getPrototypeOf(InputBase).apply(this, arguments));
    }

    _createClass(InputBase, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            bold = _this$props.bold,
            className = _this$props.className,
            element = _this$props.element,
            innerRef = _this$props.innerRef,
            inverse = _this$props.inverse,
            size = _this$props.size,
            otherProps = _objectWithoutProperties(_this$props, [
              'bold',
              'className',
              'element',
              'innerRef',
              'inverse',
              'size',
            ]);

          var classNames = cx(
            theme['input'],
            theme['is-'.concat(size)],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-inverse'], inverse),
            _defineProperty(_cx, theme['is-bold'], bold),
            _cx),
            className,
          );
          var restProps = omitBoxProps(otherProps);

          var props = _objectSpread(
            {
              className: classNames,
              ref: innerRef,
            },
            restProps,
          );

          return React.createElement(element, props);
        },
      },
    ]);

    return InputBase;
  })(PureComponent);

InputBase.defaultProps = {
  inverse: false,
  disabled: false,
  element: 'input',
  readOnly: false,
  size: 'medium',
};
export default InputBase;
