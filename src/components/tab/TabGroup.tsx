import { IconChevronLeftSmallOutline, IconChevronRightSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import smoothScroll from 'smoothscroll-polyfill';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import IconButton from '../iconButton';
import theme from './theme.css';

const SCROLL_BUTTON_WIDTH = 48;
const SCROLL_DISTANCE = 200;

interface TabGroupProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium';
}

const TabGroup: GenericComponent<TabGroupProps> = ({ children, className, size, ...others }) => {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const activeTabRef = useRef<HTMLElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const checkForScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollToActiveTab = () => {
    if (activeTabRef.current) {
      const { offsetLeft } = activeTabRef.current;
      scrollContainerRef.current?.scrollTo({ left: offsetLeft - SCROLL_BUTTON_WIDTH });
    }
  };
  const handleResize = () => {
    scrollToActiveTab();
    checkForScrollPosition();
  };

  const handleScroll = () => {
    checkForScrollPosition();
  };

  const scrollContainerBy = (distance: number) => {
    scrollContainerRef.current?.scrollBy({ left: distance, behavior: 'smooth' });
  };
  useEffect(() => {
    smoothScroll.polyfill();
    scrollContainerRef.current?.addEventListener('scroll', handleScroll);
    return () => scrollContainerRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const classNames = cx(theme['tab-group'], className);

  return (
    <Box
      backgroundColor="neutral"
      backgroundTint="lightest"
      data-teamleader-ui="tab-group"
      className={classNames}
      {...others}
      display="flex"
      paddingHorizontal={size === 'small' ? 2 : 0}
    >
      <Box className={theme['scroll-container']} display="flex" overflowX="scroll" ref={scrollContainerRef}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                size,
                ...(child.props.active && { ref: activeTabRef }),
              })
            : child,
        )}
      </Box>
      {canScrollLeft && (
        <Box className={theme['scroll-left-button-wrapper']}>
          <IconButton
            className={theme['scroll-button']}
            icon={<IconChevronLeftSmallOutline />}
            onClick={() => {
              scrollContainerBy(-1 * SCROLL_DISTANCE);
            }}
          />
        </Box>
      )}
      {canScrollRight && (
        <Box className={theme['scroll-right-button-wrapper']}>
          <IconButton
            className={theme['scroll-button']}
            icon={<IconChevronRightSmallOutline />}
            onClick={() => {
              scrollContainerBy(SCROLL_DISTANCE);
            }}
          />
        </Box>
      )}
      <ReactResizeDetector handleWidth onResize={handleResize} />
    </Box>
  );
};

export default TabGroup;
