'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _classnames = _interopRequireDefault(require('classnames'));

var _reactTransitionGroup = require('react-transition-group');

var ToastContainer =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ToastContainer, _PureComponent);

    function ToastContainer() {
      (0, _classCallCheck2.default)(this, ToastContainer);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ToastContainer).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(ToastContainer, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className;
          var classNames = (0, _classnames.default)(_theme.default['container'], className);
          return _react.default.createElement(
            'ul',
            {
              className: classNames,
              'data-teamleader-ui': 'toast-container',
            },
            _react.default.createElement(
              _reactTransitionGroup.TransitionGroup,
              {
                component: 'li',
              },
              _react.default.Children.map(children, function(child) {
                return _react.default.createElement(
                  _reactTransitionGroup.CSSTransition,
                  {
                    timeout: 1000,
                    key: child.key,
                    classNames: {
                      appear: (0, _classnames.default)(_theme.default['appear']),
                      appearActive: (0, _classnames.default)(_theme.default['appear-active']),
                      enter: (0, _classnames.default)(_theme.default['enter']),
                      enterActive: (0, _classnames.default)(_theme.default['enter-active']),
                      enterDone: (0, _classnames.default)(_theme.default['enter-done']),
                      exit: (0, _classnames.default)(_theme.default['exit']),
                      exitActive: (0, _classnames.default)(_theme.default['exit-active']),
                      exitDone: (0, _classnames.default)(_theme.default['exit-done']),
                    },
                  },
                  child,
                );
              }),
            ),
          );
        },
      },
    ]);
    return ToastContainer;
  })(_react.PureComponent);

var _default = ToastContainer;
exports.default = _default;
