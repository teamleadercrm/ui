import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createRef, PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import InjectOverlay from '../overlay';
import Transition from 'react-transition-group/Transition';
import ReactResizeDetector from 'react-resize-detector';
import { events } from '../utils';
import { calculatePositions } from './positionCalculation';
import { getMaxHeight } from './sizeCalculation';
import Box from '../box';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

var Popover =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Popover, _PureComponent);

    function Popover() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Popover);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'popoverNode', createRef());

      _defineProperty(_assertThisInitialized(_this), 'popoverRoot', document.createElement('div'));

      _defineProperty(_assertThisInitialized(_this), 'state', {
        positioning: {
          left: 0,
          top: 0,
          maxHeight: 'initial',
        },
      });

      _defineProperty(_assertThisInitialized(_this), 'setPlacement', function() {
        var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          direction = _this$props.direction,
          position = _this$props.position,
          offsetCorrection = _this$props.offsetCorrection;

        if (_this.popoverNode.current) {
          _this.setState({
            positioning: calculatePositions(anchorEl, _this.popoverNode.current, direction, position, offsetCorrection),
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'setPlacementThrottled', throttle(_this.setPlacement, 250));

      return _this;
    }

    _createClass(Popover, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.body.appendChild(this.popoverRoot);
          events.addEventsToWindow({
            resize: this.setPlacementThrottled,
            scroll: this.setPlacementThrottled,
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          events.removeEventsFromWindow({
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

          var popover = React.createElement(
            Transition,
            {
              timeout: 0,
              in: active,
              appear: true,
            },
            function(state) {
              var _cx;

              return React.createElement(
                'div',
                {
                  className: cx(
                    theme['wrapper'],
                    theme[color],
                    theme[tint],
                    ((_cx = {}),
                    _defineProperty(_cx, theme['is-entering'], state === 'entering'),
                    _defineProperty(_cx, theme['is-entered'], state === 'entered'),
                    _cx),
                  ),
                  style: {
                    zIndex: zIndex,
                  },
                },
                React.createElement(InjectOverlay, {
                  active: active,
                  backdrop: backdrop,
                  className: theme['overlay'],
                  lockScroll: lockScroll,
                  onClick: onOverlayClick,
                  onEscKeyDown: onEscKeyDown,
                  onMouseDown: onOverlayMouseDown,
                  onMouseMove: onOverlayMouseMove,
                  onMouseUp: onOverlayMouseUp,
                }),
                React.createElement(
                  'div',
                  {
                    'data-teamleader-ui': 'popover',
                    className: cx(uiUtilities['box-shadow-200'], theme['popover'], className),
                    style: {
                      left: ''.concat(left, 'px'),
                      top: ''.concat(top, 'px'),
                      maxWidth: fullWidth ? '100vw' : maxWidth,
                      minWidth: minWidth,
                    },
                    ref: _this2.popoverNode,
                  },
                  React.createElement(
                    Box,
                    {
                      className: theme['inner'],
                      display: 'flex',
                      flex: '1 1 auto',
                      flexDirection: 'column',
                      style: {
                        maxHeight: getMaxHeight(fullHeight, maxHeight),
                      },
                    },
                    children,
                  ),
                  React.createElement(ReactResizeDetector, {
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
          return createPortal(popover, this.popoverRoot);
        },
      },
    ]);

    return Popover;
  })(PureComponent);

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
export default Popover;
