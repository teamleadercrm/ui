import React, { forwardRef, useRef, useImperativeHandle, ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';
import Box from '../box';
import MarketingLockBadge from '../marketingLockBadge';
import { Heading4, Heading5 } from '../typography';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';

export interface MarketingTabProps extends Omit<BoxProps, 'ref'> {
  active?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'large' | 'fullscreen' | 'smallest' | 'hero'>;
}

const MarketingTab: GenericComponent<MarketingTabProps> = forwardRef<HTMLElement, MarketingTabProps>(
  ({ active = false, children, className, size = 'medium', onClick, ...others }, ref) => {
    const tabRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => tabRef.current);

    const handleClick = (event: React.MouseEvent) => {
      if (onClick) {
        onClick(event);
      }
    };

    const classNames = cx(theme['wrapper'], { [theme['is-active']]: active }, className);

    const TextElement = size === 'small' ? Heading5 : Heading4;

    return (
      <Box
        data-teamleader-ui="marketing-tab"
        className={classNames}
        marginHorizontal={size === 'small' ? 1 : 2}
        paddingHorizontal={size === 'small' ? 2 : 3}
        ref={tabRef}
        onClick={handleClick}
        {...others}
      >
        <TextElement element="span">{children}</TextElement>
        <MarketingLockBadge marginLeft={3} size={size} />
      </Box>
    );
  },
);

MarketingTab.displayName = 'MarketingTab';

export default MarketingTab;
