import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

var Row =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Row, _PureComponent);

    function Row() {
      _classCallCheck(this, Row);

      return _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
    }

    _createClass(Row, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            backgroundColor = _this$props.backgroundColor,
            className = _this$props.className,
            children = _this$props.children,
            others = _objectWithoutProperties(_this$props, ['backgroundColor', 'className', 'children']);

          var classNames = cx(theme['row'], theme['has-background-'.concat(backgroundColor)], className);
          return React.createElement(
            Box,
            _extends(
              {
                className: classNames,
              },
              others,
            ),
            children,
          );
        },
      },
    ]);

    return Row;
  })(PureComponent);

Row.defaultProps = {
  backgroundColor: 'white',
};
export default Row;
