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

var LoadingSpinner =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(LoadingSpinner, _PureComponent);

    function LoadingSpinner() {
      _classCallCheck(this, LoadingSpinner);

      return _possibleConstructorReturn(this, _getPrototypeOf(LoadingSpinner).apply(this, arguments));
    }

    _createClass(LoadingSpinner, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            color = _this$props.color,
            size = _this$props.size,
            tint = _this$props.tint,
            others = _objectWithoutProperties(_this$props, ['className', 'color', 'size', 'tint']);

          var classNames = cx(
            theme['loading-spinner'],
            theme['is-'.concat(color)],
            theme['is-'.concat(size)],
            theme['is-'.concat(tint)],
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'loading-spinner',
                className: classNames,
              },
              others,
            ),
          );
        },
      },
    ]);

    return LoadingSpinner;
  })(PureComponent);

LoadingSpinner.defaultProps = {
  color: 'teal',
  size: 'medium',
  tint: 'darkest',
};
export default LoadingSpinner;
