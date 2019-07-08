'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _box = _interopRequireDefault(require('../box'));

var _ProgressStep = _interopRequireDefault(require('./ProgressStep'));

var ProgressTracker =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ProgressTracker, _PureComponent);

    function ProgressTracker() {
      (0, _classCallCheck2.default)(this, ProgressTracker);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ProgressTracker).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(ProgressTracker, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            color = _this$props.color,
            children = _this$props.children,
            currentStep = _this$props.currentStep,
            done = _this$props.done;
          var classNames = (0, _classnames.default)(_theme.default['tracker']);
          return _react.default.createElement(
            _box.default,
            {
              className: classNames,
            },
            _react.default.Children.map(children, function(child, index) {
              var activeStep = Math.max(0, currentStep);
              return _react.default.createElement(
                _ProgressStep.default,
                (0, _extends2.default)({}, child.props, {
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
  })(_react.PureComponent);

ProgressTracker.defaultProps = {
  currentStep: 0,
  color: 'neutral',
};
ProgressTracker.ProgressStep = _ProgressStep.default;
ProgressTracker.ProgressStep.displayName = 'ProgressTracker.ProgressStep';
var _default = ProgressTracker;
exports.default = _default;
