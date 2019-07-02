'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _button = require('../button'),
  _link = _interopRequireDefault(require('../link')),
  _typography = require('../typography'),
  _loadingSpinner = _interopRequireDefault(require('../loadingSpinner')),
  _uiIcons = require('@teamleader/ui-icons'),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Toast = (function(e) {
    function a() {
      var e, i;
      (0, _classCallCheck2.default)(this, a);
      for (var t = arguments.length, r = new Array(t), u = 0; u < t; u++) r[u] = arguments[u];
      return (
        (i = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'scheduleTimeout', function(e) {
          var t = e.onTimeout,
            r = e.timeout;
          i.currentTimeout && clearTimeout(i.currentTimeout),
            (i.currentTimeout = setTimeout(function() {
              t && t(), (i.currentTimeout = null);
            }, r));
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'renderCustomAction', function() {
          var e = i.props,
            t = e.action,
            r = e.actionLabel;
          return (
            t &&
            _react.default.createElement(_link.default, { className: _theme.default['action-link'], onClick: t }, r)
          );
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'renderCustomLink', function() {
          var e = i.props.link;
          return (
            e &&
            _react.default.createElement(
              _typography.TextBody,
              null,
              _react.default.cloneElement(e, {
                className: (0, _classnames.default)(e.props.className, _theme.default['action-link']),
              }),
            )
          );
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'renderCloseButton', function() {
          var e = i.props.onClose;
          return (
            e &&
            _react.default.createElement(_button.IconButton, {
              className: _theme.default['action-button'],
              icon: _react.default.createElement(_uiIcons.IconCloseMediumOutline, null),
              color: 'white',
              onClick: e,
            })
          );
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleMouseEnter', function() {
          i.props.timeout && (clearTimeout(i.currentTimeout), (i.currentTimeout = null));
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleMouseLeave', function() {
          i.props.timeout && i.scheduleTimeout(i.props);
        }),
        i
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'componentDidMount',
          value: function() {
            this.props.timeout && this.scheduleTimeout(this.props);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function() {
            clearTimeout(this.currentTimeout);
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              i = e.label,
              u = e.processing,
              a = (0, _classnames.default)(
                _uiUtilities.default['reset-box-sizing'],
                _uiUtilities.default['box-shadow-400'],
                _theme.default.toast,
                r,
              );
            return _react.default.createElement(
              'div',
              {
                'data-teamleader-ui': 'toast',
                onMouseEnter: this.handleMouseEnter,
                onMouseLeave: this.handleMouseLeave,
                className: a,
              },
              u &&
                _react.default.createElement(_loadingSpinner.default, {
                  className: _theme.default.spinner,
                  color: 'neutral',
                  tint: 'lightest',
                }),
              _react.default.createElement(
                _typography.TextBody,
                { className: _theme.default.label, color: 'neutral', tint: 'lightest', element: 'div' },
                i,
                t,
              ),
              this.renderCustomAction() || this.renderCustomLink() || this.renderCloseButton(),
            );
          },
        },
      ]),
      a
    );
  })(_react.PureComponent),
  _default = Toast;
exports.default = _default;
