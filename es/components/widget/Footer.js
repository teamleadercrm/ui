import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

var Footer =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Footer, _PureComponent);

    function Footer() {
      _classCallCheck(this, Footer);

      return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
    }

    _createClass(Footer, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            others = _objectWithoutProperties(_this$props, ['children']);

          return React.createElement(
            Island,
            _extends(
              {
                padding: 4,
              },
              others,
            ),
            children,
          );
        },
      },
    ]);

    return Footer;
  })(PureComponent);

export default Footer;
