import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';

var HelpText =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(HelpText, _PureComponent);

    function HelpText() {
      _classCallCheck(this, HelpText);

      return _possibleConstructorReturn(this, _getPrototypeOf(HelpText).apply(this, arguments));
    }

    _createClass(HelpText, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            inverse = _this$props.inverse,
            others = _objectWithoutProperties(_this$props, ['children', 'className', 'inverse']);

          return React.createElement(
            TextSmall,
            _extends(
              {
                className: className,
                color: inverse ? 'teal' : 'neutral',
                'data-teamleader-ui': 'help-text',
                marginTop: 1,
                tint: inverse ? 'light' : 'darkest',
              },
              others,
            ),
            children,
          );
        },
      },
    ]);

    return HelpText;
  })(PureComponent);

export { HelpText as default };
HelpText.defaultProps = {
  children: 'This is the help text',
  inverse: false,
};
