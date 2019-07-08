import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconCheckmarkSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import Box from '../box';
import Icon from '../icon';

var SuccessText =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(SuccessText, _PureComponent);

    function SuccessText() {
      _classCallCheck(this, SuccessText);

      return _possibleConstructorReturn(this, _getPrototypeOf(SuccessText).apply(this, arguments));
    }

    _createClass(SuccessText, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverse = _this$props.inverse,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'inverse']);

          return React.createElement(
            Box,
            _extends(
              {
                className: className,
                alignItems: 'center',
                'data-teamleader-ui': 'success-text',
                display: 'flex',
                marginTop: 2,
              },
              others,
            ),
            React.createElement(
              Icon,
              {
                color: 'mint',
                tint: inverse ? 'light' : 'dark',
              },
              React.createElement(IconCheckmarkSmallFilled, null),
            ),
            React.createElement(
              TextSmall,
              {
                color: 'mint',
                element: 'span',
                marginLeft: 1,
                tint: inverse ? 'light' : 'dark',
              },
              children,
            ),
          );
        },
      },
    ]);

    return SuccessText;
  })(PureComponent);

export { SuccessText as default };
SuccessText.defaultProps = {
  children: 'This is the success text',
  inverse: false,
};
