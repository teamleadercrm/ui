'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = _interopRequireDefault(require('../box')),
  _Transition = _interopRequireDefault(require('react-transition-group/Transition')),
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _reactDom = require('react-dom'),
  _utils = require('../utils/utils'),
  _DocumentObjectProvider = _interopRequireWildcard(require('../hoc/DocumentObjectProvider')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  POSITIONS = {
    BOTTOM: 'bottom',
    HORIZONTAL: 'horizontal',
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    VERTICAL: 'vertical',
  },
  SIZES = { medium: { padding: 3 }, small: { paddingHorizontal: 3, paddingVertical: 2 } },
  Tooltip = function(h) {
    var i = (function(e) {
      function a() {
        var e, t;
        (0, _classCallCheck2.default)(this, a);
        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
        return (
          (t = (0, _possibleConstructorReturn2.default)(
            this,
            (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(r)),
          )),
          (0, _defineProperty2.default)(
            (0, _assertThisInitialized2.default)(t),
            'tooltipRoot',
            t.props.documentObject.createElement('div'),
          ),
          (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'state', {
            active: !1,
            position: t.props.tooltipPosition,
          }),
          (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleMouseEnter', function(e) {
            t.activate(t.calculatePosition(e.currentTarget)), t.props.onMouseEnter && t.props.onMouseEnter(e);
          }),
          (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleMouseLeave', function(e) {
            t.deactivate(), t.props.onMouseLeave && t.props.onMouseLeave(e);
          }),
          (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleClick', function(e) {
            t.props.tooltipHideOnClick && t.state.active && t.deactivate(),
              t.props.tooltipShowOnClick && !t.state.active && t.activate(t.calculatePosition(e.currentTarget)),
              t.props.onClick && t.props.onClick(e);
          }),
          (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleTransitionExited', function() {
            t.props.documentObject.body.removeChild(t.tooltipRoot);
          }),
          t
        );
      }
      return (
        (0, _inherits2.default)(a, e),
        (0, _createClass2.default)(a, [
          {
            key: 'getPosition',
            value: function(e) {
              var t = this.props.tooltipPosition;
              if (t === POSITIONS.HORIZONTAL) {
                var i = e.getBoundingClientRect(),
                  r = (0, _utils.getViewport)().width;
                return i.left < r / 2 - i.width / 2 ? POSITIONS.RIGHT : POSITIONS.LEFT;
              }
              if (t !== POSITIONS.VERTICAL) return t;
              var o = e.getBoundingClientRect(),
                a = (0, _utils.getViewport)().height;
              return o.top < a / 2 - o.height / 2 ? POSITIONS.BOTTOM : POSITIONS.TOP;
            },
          },
          {
            key: 'activate',
            value: function(e) {
              var t = e.top,
                i = e.left,
                r = e.position;
              this.props.documentObject.body.appendChild(this.tooltipRoot),
                this.setState({ active: !0, top: t, left: i, position: r });
            },
          },
          {
            key: 'deactivate',
            value: function() {
              this.setState({ active: !1 });
            },
          },
          {
            key: 'calculatePosition',
            value: function(e) {
              var t = e.getBoundingClientRect(),
                i = t.top,
                r = t.left,
                o = t.height,
                a = t.width,
                l = this.getPosition(e),
                n = window.scrollX || window.pageXOffset,
                u = window.scrollY || window.pageYOffset;
              return l === POSITIONS.BOTTOM
                ? { top: i + o + u, left: r + a / 2 + n, position: l }
                : l === POSITIONS.TOP
                  ? { top: i + u, left: r + a / 2 + n, position: l }
                  : l === POSITIONS.LEFT
                    ? { top: i + o / 2 + u, left: r + n, position: l }
                    : l === POSITIONS.RIGHT
                      ? { top: i + o / 2 + u, left: r + a + n, position: l }
                      : void 0;
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.state,
                t = e.active,
                r = e.left,
                o = e.top,
                a = e.position,
                i = this.props,
                l = i.children,
                n = i.className,
                u = i.tooltip,
                s = i.tooltipColor,
                d = i.tooltipIcon,
                p = i.tooltipSize,
                c = (0, _objectWithoutProperties2.default)(i, [
                  'children',
                  'className',
                  'tooltip',
                  'tooltipColor',
                  'tooltipIcon',
                  'tooltipSize',
                ]),
                f = (0, _lodash.default)(c, [
                  'onClick',
                  'onMouseEnter',
                  'onMouseLeave',
                  'tooltipHideOnClick',
                  'tooltipPosition',
                  'tooltipShowOnClick',
                  'documentObject',
                ]),
                _ = (0, _objectSpread2.default)({}, f, {
                  className: n,
                  onClick: this.handleClick,
                  onMouseEnter: this.handleMouseEnter,
                  onMouseLeave: this.handleMouseLeave,
                });
              return _react.default.createElement(
                h,
                _,
                l,
                (0, _reactDom.createPortal)(
                  _react.default.createElement(
                    _Transition.default,
                    { in: t, onExited: this.handleTransitionExited, timeout: { enter: 0, exit: 1e3 } },
                    function(e) {
                      var t,
                        i = (0, _classnames.default)(
                          _uiUtilities.default['box-shadow-200'],
                          _theme.default.tooltip,
                          _theme.default[s],
                          _theme.default[p],
                          ((t = {}),
                          (0, _defineProperty2.default)(t, _theme.default['is-entering'], 'entering' === e),
                          (0, _defineProperty2.default)(t, _theme.default['is-entered'], 'entered' === e),
                          (0, _defineProperty2.default)(t, _theme.default['is-exiting'], 'exiting' === e),
                          (0, _defineProperty2.default)(t, _theme.default[a], _theme.default[a]),
                          t),
                        );
                      return _react.default.createElement(
                        'div',
                        { className: i, 'data-teamleader-ui': 'tooltip', style: { top: o, left: r } },
                        _react.default.createElement(
                          _box.default,
                          (0, _extends2.default)({ className: _theme.default.inner }, SIZES[p]),
                          d && _react.default.createElement('div', { className: _theme.default.icon }, d),
                          _react.default.createElement('div', { className: _theme.default.text }, u),
                        ),
                      );
                    },
                  ),
                  this.tooltipRoot,
                ),
              );
            },
          },
        ]),
        a
      );
    })(_react.Component);
    return (
      (i.defaultProps = {
        className: '',
        tooltipColor: 'white',
        tooltipHideOnClick: !0,
        tooltipIcon: null,
        tooltipPosition: POSITIONS.TOP,
        tooltipShowOnClick: !1,
        tooltipSize: 'medium',
      }),
      (0, _DocumentObjectProvider.default)(function(t) {
        return _react.default.createElement(_DocumentObjectProvider.Context.Consumer, null, function(e) {
          return _react.default.createElement(i, (0, _extends2.default)({}, t, { documentObject: e }));
        });
      })
    );
  },
  _default = Tooltip;
exports.default = _default;
