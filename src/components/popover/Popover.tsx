import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { COLORS, TINTS } from '../../constants';

interface PopoverProps extends Omit<BoxProps, 'ref'> {
  /** The state of the Popover, when true the Popover is rendered otherwise it is not. */
  active?: boolean;
  /** The Popovers anchor element. */
  anchorEl?: Element | null;
  /** The background colour of the Overlay. */
  backdrop?: string;
  /** The component wrapped by the Popover. */
  children?: ReactNode;
  /** The class names for the wrapper to apply custom styling. */
  className?: string;
  /** The background colour of the Popover. */
  color?: typeof COLORS[number];
  /** The preferred direction in which the Popover is rendered, is overridden with the opposite or adjacent direction if the Popover cannot be entirely displayed in the current direction. */
  direction?: 'north' | 'south' | 'east' | 'west';
  /** If true, the Popover stretches to fit its content vertically */
  fullHeight?: boolean;
  /** If true, the Popover stretches to fit its content horizontally */
  fullWidth?: boolean;
  /** The scroll state of the body, if true it will not be scrollable. */
  lockScroll?: boolean;
  /** The maximum width for the popover. */
  maxWidth?: string;
  /** The minimum width for the popover. */
  minWidth?: string;
  /** The amount of extra translation on the Popover (has no effect if position is "middle" or "center"). */
  offsetCorrection?: number;
  /** The function executed, when the "ESC" key is down. */
  onEscKeyDown?: () => void;
  /** The function executed, when the Overlay is clicked. */
  onOverlayClick?: () => void;
  /** The position in which the Popover is rendered, is overridden with the another position if the Popover cannot be entirely displayed in the current position. */
  position?: 'start' | 'center' | 'end';
  /** The tint of the background colour of the Popover. */
  tint?: typeof TINTS[number];
  /** The z-index of the Popover */
  zIndex?: number;
  /** Determines wether the focus should be returned to the source element, enabled by default in useFocusTrap */
  returnFocusToSource?: boolean;
}

interface Positioning {
  left?: number;
  top?: number;
  maxHeight?: number;
}

const Popover: GenericComponent<PopoverProps> = (props) => {
  const [positioning, setPositioning] = useState<Positioning>({ left: 0, top: 0 });

  const {
    active = true,
    backdrop = 'dark',
    children,
    className,
    color = 'neutral',
    fullHeight = true,
    fullWidth = false,
    lockScroll = true,
    maxWidth = '50vw',
    minWidth = '180px',
    onOverlayClick,
    onEscKeyDown,
    tint = 'lightest',
    zIndex = 300,
    anchorEl,
    direction = 'south',
    position = 'center',
    offsetCorrection = 0,
    returnFocusToSource = true,
  } = props;

  const { ref, FocusRing } = useFocusTrap({ active, returnFocusToSource, initialFocusRef: undefined });

  const handleResize = () => {
    if (ref.current && anchorEl) {
      setPositioning(calculatePositions(anchorEl, ref.current, direction, position, offsetCorrection));
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

  const { left, top, maxHeight } = positioning;

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
                <Box
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
                    style={{ maxHeight: maxHeight && getMaxHeight(fullHeight, maxHeight) }}
                  >
                    {children}
                  </Box>
                </Box>
              </FocusRing>
            </Overlay>
          </div>
        );
      }}
    </Transition>
  );

  return createPortal(popover, document.body);
};

export default Popover;
