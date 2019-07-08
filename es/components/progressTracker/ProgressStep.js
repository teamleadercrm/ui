import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import { TextSmall } from '../typography';

var ProgressStep =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ProgressStep, _PureComponent);

    function ProgressStep() {
      _classCallCheck(this, ProgressStep);

      return _possibleConstructorReturn(this, _getPrototypeOf(ProgressStep).apply(this, arguments));
    }

    _createClass(ProgressStep, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            label = _this$props.label,
            active = _this$props.active,
            completed = _this$props.completed,
            onClick = _this$props.onClick;
          var classNames = cx(
            theme['step'],
            ((_cx = {}),
            _defineProperty(_cx, theme['is-active'], active),
            _defineProperty(_cx, theme['is-completed'], completed),
            _defineProperty(_cx, theme['is-clickable'], onClick),
            _cx),
          );
          return React.createElement(
            Box,
            {
              className: classNames,
              onClick: onClick,
            },
            React.createElement(
              TextSmall,
              {
                className: theme['step-label'],
              },
              label,
            ),
            React.createElement('span', {
              className: theme['status-bullet'],
            }),
          );
        },
      },
    ]);

    return ProgressStep;
  })(PureComponent);

ProgressStep.defaultProps = {
  active: false,
  completed: false,
};
export default ProgressStep;
