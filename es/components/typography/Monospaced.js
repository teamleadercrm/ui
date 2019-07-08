import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

var Monospaced =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Monospaced, _PureComponent);

    function Monospaced() {
      _classCallCheck(this, Monospaced);

      return _possibleConstructorReturn(this, _getPrototypeOf(Monospaced).apply(this, arguments));
    }

    _createClass(Monospaced, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            element = _this$props.element;
          var classNames = cx(theme['monospaced'], className);
          var Element = element;
          return React.createElement(
            Element,
            {
              'data-teamleader-ui': 'monospaced',
              className: classNames,
            },
            children,
          );
        },
      },
    ]);

    return Monospaced;
  })(PureComponent);

Monospaced.defaultProps = {
  element: 'span',
};
export default Monospaced;
