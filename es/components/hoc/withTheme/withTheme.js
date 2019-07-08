import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { COLORS, TINTS } from '../../../constants';

var withTheme = function withTheme(theme) {
  return function(WrappedComponent) {
    var WithTheme =
      /*#__PURE__*/
      (function(_PureComponent) {
        _inherits(WithTheme, _PureComponent);

        function WithTheme() {
          _classCallCheck(this, WithTheme);

          return _possibleConstructorReturn(this, _getPrototypeOf(WithTheme).apply(this, arguments));
        }

        _createClass(WithTheme, [
          {
            key: 'render',
            value: function render() {
              var _this$props = this.props,
                color = _this$props.color,
                size = _this$props.size,
                tint = _this$props.tint,
                className = _this$props.className,
                others = _objectWithoutProperties(_this$props, ['color', 'size', 'tint', 'className']);

              var classNames = cx(
                theme['is-'.concat(color)],
                theme['is-'.concat(size)],
                theme['is-'.concat(tint)],
                className,
              );
              return React.createElement(
                WrappedComponent,
                _extends(
                  {
                    className: classNames,
                  },
                  others,
                ),
              );
            },
          },
        ]);

        return WithTheme;
      })(PureComponent);

    WithTheme.defaultProps = {
      color: 'neutral',
      size: 'medium',
      tint: 'normal',
    };
    WithTheme.displayName = 'WithTheme('.concat(
      WrappedComponent.displayName || WrappedComponent.name || 'Component',
      ')',
    );
    return WithTheme;
  };
};

export default withTheme;
