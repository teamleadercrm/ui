import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import throttle from 'lodash.throttle';
import Overlay from '../overlay';
import Transition from 'react-transition-group/Transition';
import { useResizeDetector } from 'react-resize-detector';
import { events } from '../utils';
import { calculatePositions } from './positionCalculation';
import { getMaxHeight } from './sizeCalculation';
import Box from '../box';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import useFocusTrap from '../../utils/useFocusTrap';

/** @type {React.ComponentType<any>} */
const Popover = (props) => {
  const [state, setState] = useState({ positioning: { left: 0, top: 0, maxHeight: 'initial' } });

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
    tint,
    zIndex,
    anchorEl,
    direction,
    position,
    offsetCorrection,
    returnFocusToSource,
  } = props;

  const { ref, FocusRing } = useFocusTrap({ active, returnFocusToSource, initialFocusRef: false });

  const handleResize = () => {
    if (ref.current) {
      setState({
        positioning: calculatePositions(anchorEl, ref.current, direction, position, offsetCorrection),
      });
    }
  };

  useResizeDetector({
    handleHeight: true,
    handleWidth: true,
    onResize: handleResize,
    refreshMode: 'throttle',
    refreshRate: 250,
  });

  useEffect(() => {
    const handleResizeThrottled = throttle(handleResize, 250);
    events.addEventsToWindow({ resize: handleResizeThrottled, scroll: handleResizeThrottled });

    return function cleanup() {
      events.removeEventsFromWindow({ resize: handleResizeThrottled, scroll: handleResizeThrottled });
    };
  }, [handleResize]);

  useEffect(() => {
    if (active) {
      handleResize();
    }
  }, [props]);

  const { left, top, maxHeight } = state.positioning;

  if (!active) {
    return null;
  }

  const popover = (
    <Transition timeout={0} in={active} appear>
      {(state) => {
        return (
          <div
            className={cx(theme['wrapper'], theme[color], theme[tint], {
              [theme['is-entering']]: state === 'entering',
              [theme['is-entered']]: state === 'entered',
            })}
            style={{ zIndex }}
          >
            <Overlay
              active={active}
              backdrop={backdrop}
              className={theme['overlay']}
              lockScroll={lockScroll}
              onOverlayClick={onOverlayClick}
              onEscKeyDown={onEscKeyDown}
            >
              <FocusRing>
                <div
                  data-teamleader-ui="popover"
                  className={cx(uiUtilities['box-shadow-200'], theme['popover'], className)}
                  style={{ left: `${left}px`, top: `${top}px`, maxWidth: fullWidth ? '100vw' : maxWidth, minWidth }}
                  ref={ref}
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
                </div>
              </FocusRing>
            </Overlay>
          </div>
        );
      }}
    </Transition>
  );

  return createPortal(popover, document.body);
};

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
  /** The preferred direction in which the Popover is rendered, is overridden with the opposite or adjacent direction if the Popover cannot be entirely displayed in the current direction. */
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
  /** The position in which the Popover is rendered, is overridden with the another position if the Popover cannot be entirely displayed in the current position. */
  position: PropTypes.oneOf(['start', 'center', 'end']),
  /** The tint of the background colour of the Popover. */
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
  /** The z-index of the Popover */
  zIndex: PropTypes.number,
  /** Determines wether the focus should be returned to the source element, enabled by default in useFocusTrap */
  returnFocusToSource: PropTypes.bool,
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
  minWidth: '180px',
  offsetCorrection: 0,
  position: 'center',
  tint: 'lightest',
  returnFocusToSource: true,
};

export default Popover;
