'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _classnames = _interopRequireDefault(require('classnames')),
  _reactTransitionGroup = require('react-transition-group'),
  ToastContainer = (function(e) {
    function t() {
      return (
        (0, _classCallCheck2.default)(this, t),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(t).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(t, e),
      (0, _createClass2.default)(t, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              a = (0, _classnames.default)(_theme.default.container, r);
            return _react.default.createElement(
              'ul',
              { className: a, 'data-teamleader-ui': 'toast-container' },
              _react.default.createElement(
                _reactTransitionGroup.TransitionGroup,
                { component: 'li' },
                _react.default.Children.map(t, function(e) {
                  return _react.default.createElement(
                    _reactTransitionGroup.CSSTransition,
                    {
                      timeout: 1e3,
                      key: e.key,
                      classNames: {
                        appear: (0, _classnames.default)(_theme.default.appear),
                        appearActive: (0, _classnames.default)(_theme.default['appear-active']),
                        enter: (0, _classnames.default)(_theme.default.enter),
                        enterActive: (0, _classnames.default)(_theme.default['enter-active']),
                        enterDone: (0, _classnames.default)(_theme.default['enter-done']),
                        exit: (0, _classnames.default)(_theme.default.exit),
                        exitActive: (0, _classnames.default)(_theme.default['exit-active']),
                        exitDone: (0, _classnames.default)(_theme.default['exit-done']),
                      },
                    },
                    e,
                  );
                }),
              ),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent),
  _default = ToastContainer;
exports.default = _default;
