'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

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

var _typography = require('../typography');

var ProgressStep =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ProgressStep, _PureComponent);

    function ProgressStep() {
      (0, _classCallCheck2.default)(this, ProgressStep);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ProgressStep).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(ProgressStep, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            label = _this$props.label,
            active = _this$props.active,
            completed = _this$props.completed,
            onClick = _this$props.onClick;
          var classNames = (0, _classnames.default)(
            _theme.default['step'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-active'], active),
            (0, _defineProperty2.default)(_cx, _theme.default['is-completed'], completed),
            (0, _defineProperty2.default)(_cx, _theme.default['is-clickable'], onClick),
            _cx),
          );
          return _react.default.createElement(
            _box.default,
            {
              className: classNames,
              onClick: onClick,
            },
            _react.default.createElement(
              _typography.TextSmall,
              {
                className: _theme.default['step-label'],
              },
              label,
            ),
            _react.default.createElement('span', {
              className: _theme.default['status-bullet'],
            }),
          );
        },
      },
    ]);
    return ProgressStep;
  })(_react.PureComponent);

ProgressStep.defaultProps = {
  active: false,
  completed: false,
};
var _default = ProgressStep;
exports.default = _default;
