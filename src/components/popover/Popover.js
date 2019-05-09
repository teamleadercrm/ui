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

class Popover extends PureComponent {
  popoverNode = createRef();
  popoverRoot = document.createElement('div');

  state = { positioning: { left: 0, top: 0, maxHeight: 'initial' } };

  componentDidMount() {
    document.body.appendChild(this.popoverRoot);
    events.addEventsToWindow({ resize: this.setPlacementThrottled, scroll: this.setPlacementThrottled });
  }

  componentWillUnmount() {
    events.removeEventsFromWindow({ resize: this.setPlacementThrottled, scroll: this.setPlacementThrottled });
    document.body.removeChild(this.popoverRoot);
  }

  componentDidUpdate(prevProps) {
    if (this.props.active && prevProps !== this.props) {
      this.setPlacement();
    }
  }

  setPlacement = () => {
    const { anchorEl, direction, position, offsetCorrection } = this.props;

    if (this.popoverNode.current) {
      this.setState({
        positioning: calculatePositions(anchorEl, this.popoverNode.current, direction, position, offsetCorrection),
      });
    }
  };

  setPlacementThrottled = throttle(this.setPlacement, 250);

  render() {
    const { left, top, maxHeight } = this.state.positioning;

    const {
      active,
      backdrop,
      children,
      className,
      color,
      fullHeight,
      fullWidth,
      lockScroll,
      maxWidth,
      minWidth,
      onOverlayClick,
      onEscKeyDown,
      onOverlayMouseDown,
      onOverlayMouseMove,
      onOverlayMouseUp,
      tint,
      zIndex,
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
              style={{ zIndex }}
            >
              <InjectOverlay
                active={active}
                backdrop={backdrop}
                className={theme['overlay']}
                lockScroll={lockScroll}
                onClick={onOverlayClick}
                onEscKeyDown={onEscKeyDown}
                onMouseDown={onOverlayMouseDown}
                onMouseMove={onOverlayMouseMove}
                onMouseUp={onOverlayMouseUp}
              />
              <div
                data-teamleader-ui={'popover'}
                className={cx(uiUtilities['box-shadow-200'], theme['popover'], className)}
                style={{ left: `${left}px`, top: `${top}px`, maxWidth: fullWidth ? '100vw' : maxWidth, minWidth }}
                ref={this.popoverNode}
              >
                <Box
                  className={theme['inner']}
                  display="flex"
                  flex="1 1 auto"
                  flexDirection="column"
                  style={{ maxHeight: getMaxHeight(fullHeight, maxHeight) }}
                >
                  {children}
                </Box>
                <ReactResizeDetector
                  handleHeight
                  handleWidth
                  onResize={this.setPlacement}
                  refreshMode="throttle"
                  refreshRate={250}
                />
              </div>
            </div>
          );
        }}
      </Transition>
    );

    return createPortal(popover, this.popoverRoot);
  }
}

Popover.propTypes = {
  /** The state of the Popover, when true the Popover is rendered otherwise it is not. */
  active: PropTypes.bool,
  /** The Popovers anchor element. */
  anchorEl: PropTypes.object,
  /** The background colour of the Overlay. */
  backdrop: PropTypes.string,
  /** The component wrapped by the Popover. */
  children: PropTypes.node,
  /** The class names for the wrapper to apply custom styling. */
  className: PropTypes.string,
  /** The background colour of the Popover. */
  color: PropTypes.oneOf(['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet']),
  /** The direction in which the Popover is rendered, is overridden with the opposite direction if the Popover cannot be entirely displayed in the current direction. */
  direction: PropTypes.oneOf(['north', 'south', 'east', 'west']),
  /** If true, the Popover stretches to fit its content vertically */
  fullHeight: PropTypes.bool,
  /** If true, the Popover stretches to fit its content horizontally */
  fullWidth: PropTypes.bool,
  /** The scroll state of the body, if true it will not be scrollable. */
  lockScroll: PropTypes.bool,
  /** The maximum width for the popover. */
  maxWidth: PropTypes.string,
  /** The minimum width for the popover. */
  minWidth: PropTypes.string,
  /** The amount of extra translation on the Popover (has no effect if position is "middle" or "center"). */
  offsetCorrection: PropTypes.number,
  /** The function executed, when the "ESC" key is down. */
  onEscKeyDown: PropTypes.func,
  /** The function executed, when the Overlay is clicked. */
  onOverlayClick: PropTypes.func,
  /** The function executed, when the mouse is down on the Overlay. */
  onOverlayMouseDown: PropTypes.func,
  /** The function executed, when the mouse is being moved over the Overlay. */
  onOverlayMouseMove: PropTypes.func,
  /** The function executed, when the mouse is up on the Overlay. */
  onOverlayMouseUp: PropTypes.func,
  /** The position in which the Popover is rendered, is overridden with the another position if the Popover cannot be entirely displayed in the current position. */
  position: PropTypes.oneOf(['start', 'center', 'end']),
  /** The tint of the background colour of the Popover. */
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
  /** The z-index of the Popover */
  zIndex: PropTypes.number,
};

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
