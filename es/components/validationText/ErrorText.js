import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconWarningBadgedSmallFilled } from '@teamleader/ui-icons';
import { TextSmall } from '../typography';
import Box from '../box';
import Icon from '../icon';

var ErrorText =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ErrorText, _PureComponent);

    function ErrorText() {
      _classCallCheck(this, ErrorText);

      return _possibleConstructorReturn(this, _getPrototypeOf(ErrorText).apply(this, arguments));
    }

    _createClass(ErrorText, [
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
                'data-teamleader-ui': 'error-text',
                display: 'flex',
                marginTop: 2,
              },
              others,
            ),
            React.createElement(
              Icon,
              {
                color: 'ruby',
                tint: inverse ? 'light' : 'dark',
              },
              React.createElement(IconWarningBadgedSmallFilled, null),
            ),
            React.createElement(
              TextSmall,
              {
                color: 'ruby',
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

    return ErrorText;
  })(PureComponent);

export { ErrorText as default };
ErrorText.defaultProps = {
  children: 'This is the error text',
  inverse: false,
};
