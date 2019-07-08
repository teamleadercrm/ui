import _extends from '@babel/runtime/helpers/extends';
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
import ProgressStep from './ProgressStep';

var ProgressTracker =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(ProgressTracker, _PureComponent);

    function ProgressTracker() {
      _classCallCheck(this, ProgressTracker);

      return _possibleConstructorReturn(this, _getPrototypeOf(ProgressTracker).apply(this, arguments));
    }

    _createClass(ProgressTracker, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            color = _this$props.color,
            children = _this$props.children,
            currentStep = _this$props.currentStep,
            done = _this$props.done;
          var classNames = cx(theme['tracker']);
          return React.createElement(
            Box,
            {
              className: classNames,
            },
            React.Children.map(children, function(child, index) {
              var activeStep = Math.max(0, currentStep);
              return React.createElement(
                ProgressStep,
                _extends({}, child.props, {
                  active: done ? false : index === activeStep,
                  completed: done || index < activeStep,
                  color: color,
                }),
              );
            }),
          );
        },
      },
    ]);

    return ProgressTracker;
  })(PureComponent);

ProgressTracker.defaultProps = {
  currentStep: 0,
  color: 'neutral',
};
ProgressTracker.ProgressStep = ProgressStep;
ProgressTracker.ProgressStep.displayName = 'ProgressTracker.ProgressStep';
export default ProgressTracker;
