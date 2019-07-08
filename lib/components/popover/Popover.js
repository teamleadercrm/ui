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
  _reactDom = require('react-dom'),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.throttle')),
  _overlay = _interopRequireDefault(require('../overlay')),
  _Transition = _interopRequireDefault(require('react-transition-group/Transition')),
  _reactResizeDetector = _interopRequireDefault(require('react-resize-detector')),
  _utils = require('../utils'),
  _positionCalculation = require('./positionCalculation'),
  _sizeCalculation = require('./sizeCalculation'),
  _box = _interopRequireDefault(require('../box')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Popover = (function(e) {
    function a() {
      var e, o;
      (0, _classCallCheck2.default)(this, a);
      for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
      return (
        (o = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'popoverNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(o),
          'popoverRoot',
          document.createElement('div'),
        ),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'state', {
          positioning: { left: 0, top: 0, maxHeight: 'initial' },
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(o), 'setPlacement', function() {
          var e = o.props,
            t = e.anchorEl,
            r = e.direction,
            i = e.position,
            a = e.offsetCorrection;
          o.popoverNode.current &&
            o.setState({
              positioning: (0, _positionCalculation.calculatePositions)(t, o.popoverNode.current, r, i, a),
            });
        }),
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(o),
          'setPlacementThrottled',
          (0, _lodash.default)(o.setPlacement, 250),
        ),
        o
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'componentDidMount',
          value: function() {
            document.body.appendChild(this.popoverRoot),
              _utils.events.addEventsToWindow({
                resize: this.setPlacementThrottled,
                scroll: this.setPlacementThrottled,
              });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function() {
            _utils.events.removeEventsFromWindow({
              resize: this.setPlacementThrottled,
              scroll: this.setPlacementThrottled,
            }),
              document.body.removeChild(this.popoverRoot);
          },
        },
        {
          key: 'componentDidUpdate',
          value: function(e) {
            this.props.active && e !== this.props && this.setPlacement();
          },
        },
        {
          key: 'render',
          value: function() {
            var r = this,
              e = this.state.positioning,
              i = e.left,
              a = e.top,
              o = e.maxHeight,
              t = this.props,
              l = t.active,
              n = t.backdrop,
              u = t.children,
              s = t.className,
              d = t.color,
              c = t.fullHeight,
              p = t.fullWidth,
              f = t.lockScroll,
              _ = t.maxWidth,
              h = t.minWidth,
              m = t.onOverlayClick,
              v = t.onEscKeyDown,
              q = t.onOverlayMouseDown,
              y = t.onOverlayMouseMove,
              R = t.onOverlayMouseUp,
              b = t.tint,
              D = t.zIndex;
            if (!l) return null;
            var P = _react.default.createElement(_Transition.default, { timeout: 0, in: l, appear: !0 }, function(e) {
              var t;
              return _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(
                    _theme.default.wrapper,
                    _theme.default[d],
                    _theme.default[b],
                    ((t = {}),
                    (0, _defineProperty2.default)(t, _theme.default['is-entering'], 'entering' === e),
                    (0, _defineProperty2.default)(t, _theme.default['is-entered'], 'entered' === e),
                    t),
                  ),
                  style: { zIndex: D },
                },
                _react.default.createElement(_overlay.default, {
                  active: l,
                  backdrop: n,
                  className: _theme.default.overlay,
                  lockScroll: f,
                  onClick: m,
                  onEscKeyDown: v,
                  onMouseDown: q,
                  onMouseMove: y,
                  onMouseUp: R,
                }),
                _react.default.createElement(
                  'div',
                  {
                    'data-teamleader-ui': 'popover',
                    className: (0, _classnames.default)(
                      _uiUtilities.default['box-shadow-200'],
                      _theme.default.popover,
                      s,
                    ),
                    style: {
                      left: ''.concat(i, 'px'),
                      top: ''.concat(a, 'px'),
                      maxWidth: p ? '100vw' : _,
                      minWidth: h,
                    },
                    ref: r.popoverNode,
                  },
                  _react.default.createElement(
                    _box.default,
                    {
                      className: _theme.default.inner,
                      display: 'flex',
                      flex: '1 1 auto',
                      flexDirection: 'column',
                      style: { maxHeight: (0, _sizeCalculation.getMaxHeight)(c, o) },
                    },
                    u,
                  ),
                  _react.default.createElement(_reactResizeDetector.default, {
                    handleHeight: !0,
                    handleWidth: !0,
                    onResize: r.setPlacement,
                    refreshMode: 'throttle',
                    refreshRate: 250,
                  }),
                ),
              );
            });
            return (0, _reactDom.createPortal)(P, this.popoverRoot);
          },
        },
      ]),
      a
    );
  })(_react.PureComponent);
Popover.defaultProps = {
  active: !0,
  backdrop: 'dark',
  zIndex: 300,
  direction: 'south',
  fullHeight: !0,
  fullWidth: !1,
  color: 'neutral',
  lockScroll: !0,
  maxWidth: '50vw',
  minWidth: 'auto',
  offsetCorrection: 0,
  position: 'center',
  tint: 'lightest',
};
var _default = Popover;
exports.default = _default;
