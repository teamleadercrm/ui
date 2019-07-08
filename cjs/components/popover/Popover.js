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

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactDom = require('react-dom');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _lodash = _interopRequireDefault(require('lodash.throttle'));

var _overlay = _interopRequireDefault(require('../overlay'));

var _Transition = _interopRequireDefault(require('react-transition-group/Transition'));

var _reactResizeDetector = _interopRequireDefault(require('react-resize-detector'));

var _utils = require('../utils');

var _positionCalculation = require('./positionCalculation');

var _sizeCalculation = require('./sizeCalculation');

var _box = _interopRequireDefault(require('../box'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Popover =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Popover, _PureComponent);

    function Popover() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Popover);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'popoverNode',
        (0, _react.createRef)(),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'popoverRoot',
        document.createElement('div'),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        positioning: {
          left: 0,
          top: 0,
          maxHeight: 'initial',
        },
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'setPlacement', function() {
        var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          direction = _this$props.direction,
          position = _this$props.position,
          offsetCorrection = _this$props.offsetCorrection;

        if (_this.popoverNode.current) {
          _this.setState({
            positioning: (0, _positionCalculation.calculatePositions)(
              anchorEl,
              _this.popoverNode.current,
              direction,
              position,
              offsetCorrection,
            ),
          });
        }
      });
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'setPlacementThrottled',
        (0, _lodash.default)(_this.setPlacement, 250),
      );
      return _this;
    }

    (0, _createClass2.default)(Popover, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.body.appendChild(this.popoverRoot);

          _utils.events.addEventsToWindow({
            resize: this.setPlacementThrottled,
            scroll: this.setPlacementThrottled,
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          _utils.events.removeEventsFromWindow({
            resize: this.setPlacementThrottled,
            scroll: this.setPlacementThrottled,
          });

          document.body.removeChild(this.popoverRoot);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.active && prevProps !== this.props) {
            this.setPlacement();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$state$positioni = this.state.positioning,
            left = _this$state$positioni.left,
            top = _this$state$positioni.top,
            maxHeight = _this$state$positioni.maxHeight;
          var _this$props2 = this.props,
            active = _this$props2.active,
            backdrop = _this$props2.backdrop,
            children = _this$props2.children,
            className = _this$props2.className,
            color = _this$props2.color,
            fullHeight = _this$props2.fullHeight,
            fullWidth = _this$props2.fullWidth,
            lockScroll = _this$props2.lockScroll,
            maxWidth = _this$props2.maxWidth,
            minWidth = _this$props2.minWidth,
            onOverlayClick = _this$props2.onOverlayClick,
            onEscKeyDown = _this$props2.onEscKeyDown,
            onOverlayMouseDown = _this$props2.onOverlayMouseDown,
            onOverlayMouseMove = _this$props2.onOverlayMouseMove,
            onOverlayMouseUp = _this$props2.onOverlayMouseUp,
            tint = _this$props2.tint,
            zIndex = _this$props2.zIndex;

          if (!active) {
            return null;
          }

          var popover = _react.default.createElement(
            _Transition.default,
            {
              timeout: 0,
              in: active,
              appear: true,
            },
            function(state) {
              var _cx;

              return _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)(
                    _theme.default['wrapper'],
                    _theme.default[color],
                    _theme.default[tint],
                    ((_cx = {}),
                    (0, _defineProperty2.default)(_cx, _theme.default['is-entering'], state === 'entering'),
                    (0, _defineProperty2.default)(_cx, _theme.default['is-entered'], state === 'entered'),
                    _cx),
                  ),
                  style: {
                    zIndex: zIndex,
                  },
                },
                _react.default.createElement(_overlay.default, {
                  active: active,
                  backdrop: backdrop,
                  className: _theme.default['overlay'],
                  lockScroll: lockScroll,
                  onClick: onOverlayClick,
                  onEscKeyDown: onEscKeyDown,
                  onMouseDown: onOverlayMouseDown,
                  onMouseMove: onOverlayMouseMove,
                  onMouseUp: onOverlayMouseUp,
                }),
                _react.default.createElement(
                  'div',
                  {
                    'data-teamleader-ui': 'popover',
                    className: (0, _classnames.default)(
                      _uiUtilities.default['box-shadow-200'],
                      _theme.default['popover'],
                      className,
                    ),
                    style: {
                      left: ''.concat(left, 'px'),
                      top: ''.concat(top, 'px'),
                      maxWidth: fullWidth ? '100vw' : maxWidth,
                      minWidth: minWidth,
                    },
                    ref: _this2.popoverNode,
                  },
                  _react.default.createElement(
                    _box.default,
                    {
                      className: _theme.default['inner'],
                      display: 'flex',
                      flex: '1 1 auto',
                      flexDirection: 'column',
                      style: {
                        maxHeight: (0, _sizeCalculation.getMaxHeight)(fullHeight, maxHeight),
                      },
                    },
                    children,
                  ),
                  _react.default.createElement(_reactResizeDetector.default, {
                    handleHeight: true,
                    handleWidth: true,
                    onResize: _this2.setPlacement,
                    refreshMode: 'throttle',
                    refreshRate: 250,
                  }),
                ),
              );
            },
          );

          return (0, _reactDom.createPortal)(popover, this.popoverRoot);
        },
      },
    ]);
    return Popover;
  })(_react.PureComponent);

Popover.defaultProps = {
  active: true,
  backdrop: 'dark',
  zIndex: 300,
  direction: 'south',
  fullHeight: true,
  fullWidth: false,
  color: 'neutral',
  lockScroll: true,
  maxWidth: '50vw',
  minWidth: 'auto',
  offsetCorrection: 0,
  position: 'center',
  tint: 'lightest',
};
var _default = Popover;
exports.default = _default;
