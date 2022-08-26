import React, { ReactNode, useRef, KeyboardEvent, MouseEvent, useEffect } from 'react';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import theme from './theme.css';
import { KEY } from '../../constants';
import { selectOverlayNode } from '../select/Select';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';

export interface OverlayProps extends Omit<BoxProps, 'className' | 'children'> {
  active?: boolean;
  backdrop?: string;
  children?: ReactNode;
  className?: string;
  lockScroll?: boolean;
  onEscKeyDown?: (event: KeyboardEvent) => void;
  onOverlayClick?: (event: MouseEvent) => void;
}

export const Overlay: GenericComponent<OverlayProps> = ({
  active,
  backdrop = 'dark',
  children,
  className,
  lockScroll = true,
  onEscKeyDown,
  onOverlayClick,
  ...other
}) => {
  const innerWrapperRef = useRef<HTMLDivElement | null>(null);
  const clickOriginRef = useRef<Node | null>(null);

  const handleEscKey = (event: KeyboardEvent) => {
    if (active && event.key === KEY.Escape) {
      event.stopPropagation();
      // react-select has its own implementation of an overlay, conflicting with our custom implementation
      // so escape events fired while the select menu is open should be ignored
      const selectMenuOpen = selectOverlayNode.hasChildNodes();
      !selectMenuOpen && onEscKeyDown && onEscKeyDown(event);
    }
  };

  const handleMouseDown = (event: MouseEvent) => {
    clickOriginRef.current = event.target as Node;
  };

  const handleMouseUp = (event: MouseEvent) => {
    // Only register clicks outside of the children
    if (
      onOverlayClick &&
      // if the clickOrigin is no longer part of the DOM tree, (f.e. due to internal React re-renders)
      document.body.contains(clickOriginRef.current) &&
      !innerWrapperRef.current?.contains(clickOriginRef.current) &&
      // react-select has its own implementation of an overlay, conflicting with our custom implementation
      // so clicks on the select overlay shouldn't be registered either
      !selectOverlayNode.contains(clickOriginRef.current) &&
      // make sure only clicks within the current portal's DOM tree are handled
      event.currentTarget.contains(event.target as Node)
    ) {
      onOverlayClick(event);
    }
  };

  useEffect(() => {
    if (lockScroll) {
      if (active) {
        document.body.style.overflow = 'hidden';
      }

      if (!active && !document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
        document.body.style.overflow = '';
      }
    }
  }, [active, lockScroll]);

  return (
    <Transition timeout={0} in={active} appear>
      {(state) => {
        return (
          <div
            data-teamleader-ui="overlay"
            {...other}
            onKeyDown={handleEscKey}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={cx(
              theme['overlay'],
              theme[backdrop],
              {
                [theme['is-entered']]: state === 'entered',
              },
              className,
            )}
          >
            <div ref={innerWrapperRef}>{children}</div>
          </div>
        );
      }}
    </Transition>
  );
};

export default Overlay;
