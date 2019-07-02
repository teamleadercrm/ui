'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
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
  _Transition = _interopRequireDefault(require('react-transition-group/Transition')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  Overlay = (function(e) {
    function a() {
      var e, t;
      (0, _classCallCheck2.default)(this, a);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleEscKey', function(e) {
          t.props.active && t.props.onEscKeyDown && 27 === e.which && t.props.onEscKeyDown(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleClick', function(e) {
          e.preventDefault(), e.stopPropagation(), t.props.onClick && t.props.onClick(e);
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'componentDidMount',
          value: function() {
            var e = this.props,
              t = e.active,
              r = e.lockScroll;
            e.onEscKeyDown && document.body.addEventListener('keydown', this.handleEscKey),
              t && r && (document.body.style.overflow = 'hidden');
          },
        },
        {
          key: 'componentDidUpdate',
          value: function(e) {
            if (
              (this.props.active &&
                !e.active &&
                this.props.onEscKeyDown &&
                document.body.addEventListener('keydown', this.handleEscKey),
              this.props.lockScroll)
            ) {
              var t = this.props.active && !e.active,
                r = !this.props.active && e.active;
              t && (document.body.style.overflow = 'hidden'),
                r &&
                  !document.querySelectorAll('[data-teamleader-ui="overlay"]')[1] &&
                  (document.body.style.overflow = '');
            }
          },
        },
        {
          key: 'componentWillUnmount',
          value: function() {
            this.props.active &&
              this.props.lockScroll &&
              (document.querySelectorAll('[data-teamleader-ui="overlay"]')[1] || (document.body.style.overflow = '')),
              this.props.onEscKeyDown && document.body.removeEventListener('keydown', this.handleEscKey);
          },
        },
        {
          key: 'render',
          value: function() {
            var r = this,
              e = this.props,
              t = e.active,
              i = e.className,
              o = e.backdrop,
              a = (e.lockScroll,
              e.onEscKeyDown,
              (0, _objectWithoutProperties2.default)(e, [
                'active',
                'className',
                'backdrop',
                'lockScroll',
                'onEscKeyDown',
              ]));
            return _react.default.createElement(_Transition.default, { timeout: 0, in: t, appear: !0 }, function(e) {
              var t;
              return _react.default.createElement(
                'div',
                (0, _extends2.default)({ 'data-teamleader-ui': 'overlay' }, a, {
                  onClick: r.handleClick,
                  className: (0, _classnames.default)(
                    _theme.default.overlay,
                    _theme.default[o],
                    ((t = {}),
                    (0, _defineProperty2.default)(t, _theme.default['is-entering'], 'entering' === e),
                    (0, _defineProperty2.default)(t, _theme.default['is-entered'], 'entered' === e),
                    t),
                    i,
                  ),
                }),
              );
            });
          },
        },
      ]),
      a
    );
  })(_react.PureComponent);
Overlay.defaultProps = { backdrop: 'dark', lockScroll: !0 };
var _default = Overlay;
exports.default = _default;
