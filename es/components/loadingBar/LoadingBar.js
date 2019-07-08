import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Box from '../box';
import theme from './theme.css';

var LoadingBar =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(LoadingBar, _PureComponent);

    function LoadingBar() {
      _classCallCheck(this, LoadingBar);

      return _possibleConstructorReturn(this, _getPrototypeOf(LoadingBar).apply(this, arguments));
    }

    _createClass(LoadingBar, [
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
            theme['loading-bar'],
            theme['is-'.concat(color)],
            theme['is-'.concat(size)],
            theme['is-'.concat(tint)],
            className,
          );
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'loading-bar',
                className: classNames,
              },
              others,
            ),
            React.createElement('div', {
              className: theme['loading-bar-indicator'],
            }),
          );
        },
      },
    ]);

    return LoadingBar;
  })(PureComponent);

LoadingBar.defaultProps = {
  color: 'mint',
  size: 'small',
  tint: 'normal',
};
export default LoadingBar;
