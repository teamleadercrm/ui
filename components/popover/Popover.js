import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import InjectOverlay from '../overlay';
import Transition from 'react-transition-group/Transition';
import ReactResizeDetector from 'react-resize-detector';
import { events } from '../utils';
import { calculateHorizontalPositions, calculateVerticalPositions } from './positionCalculation';
import theme from './theme.css';

const factory = (axis, calculatePositions, Overlay) => {
  class Popover extends PureComponent {
    static propTypes = {
      active: PropTypes.bool,
      anchorEl: PropTypes.object,
      backdrop: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      color: PropTypes.oneOf(['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet']),
      direction: PropTypes.string.isRequired,
      offsetCorrection: PropTypes.number,
      onEscKeyDown: PropTypes.func,
      onOverlayClick: PropTypes.func,
      onOverlayMouseDown: PropTypes.func,
      onOverlayMouseMove: PropTypes.func,
      onOverlayMouseUp: PropTypes.func,
      position: PropTypes.string.isRequired,
      tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
    };

    static defaultProps = {
      active: true,
      backdrop: 'dark',
      color: 'neutral',
      offsetCorrection: 0,
      tint: 'lightest',
    };

    constructor() {
      super(...arguments);

      this.popoverRoot = document.createElement('div');
      this.popoverRoot.id = 'popover-root';

      this.setPlacement = ::this.setPlacement;
      this.setPlacementThrottled = ::this.setPlacementThrottled;

      this.state = {
        positioning: {
          left: 0,
          top: 0,
          arrowLeft: 0,
          arrowTop: 0,
        },
      };
    }

    setPlacementThrottled = throttle(this.setPlacement, 16);

    componentDidMount() {
      document.body.appendChild(this.popoverRoot);

      events.addEventsToWindow({
        resize: this.setPlacementThrottled,
        scroll: this.setPlacementThrottled,
      });
    }

    componentWillUnmount() {
      events.removeEventsFromWindow({
        resize: this.setPlacementThrottled,
        scroll: this.setPlacementThrottled,
      });

      document.body.removeChild(this.popoverRoot);
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.active && prevProps !== this.props) {
        this.setPlacement();
      }
    }

    setPlacement() {
      const { anchorEl, direction, position, offsetCorrection } = this.props;

      if (this.popoverNode) {
        this.setState({
          positioning: calculatePositions(anchorEl, this.popoverNode, direction, position, offsetCorrection),
        });
      }
    }

    render() {
      const { left, top, arrowLeft, arrowTop } = this.state.positioning;

      const {
        active,
        backdrop,
        children,
        className,
        color,
        onOverlayClick,
        onEscKeyDown,
        onOverlayMouseDown,
        onOverlayMouseMove,
        onOverlayMouseUp,
        tint,
      } = this.props;

      if (!active) {
        return null;
      }

      const popover = (
        <Transition timeout={0} in={active} appear>
          {state => {
            return (
              <div
                className={cx(theme['wrapper'], theme[color], theme[tint], {
                  [theme['is-entering']]: state === 'entering',
                  [theme['is-entered']]: state === 'entered',
                })}
              >
                <Overlay
                  active={active}
                  backdrop={backdrop}
                  className={theme['overlay']}
                  onClick={onOverlayClick}
                  onEscKeyDown={onEscKeyDown}
                  onMouseDown={onOverlayMouseDown}
                  onMouseMove={onOverlayMouseMove}
                  onMouseUp={onOverlayMouseUp}
                />
                <div
                  data-teamleader-ui={`popover-${axis}`}
                  className={cx(theme['popover'], className)}
                  style={{ left: `${left}px`, top: `${top}px` }}
                  ref={node => {
                    this.popoverNode = node;
                  }}
                >
                  <div className={theme['arrow']} style={{ left: `${arrowLeft}px`, top: `${arrowTop}px` }} />
                  <div className={theme['inner']}>
                    {children}
                    <ReactResizeDetector handleHeight onResize={this.setPlacementThrottled} />
                  </div>
                </div>
              </div>
            );
          }}
        </Transition>
      );

      return createPortal(popover, this.popoverRoot);
    }
  }

  return Popover;
};

export const PopoverHorizontal = factory('horizontal', calculateHorizontalPositions, InjectOverlay);

export const PopoverVertical = factory('vertical', calculateVerticalPositions, InjectOverlay);
