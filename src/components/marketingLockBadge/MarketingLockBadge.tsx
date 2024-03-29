import React, { forwardRef } from 'react';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import { IconLockSmallFilled } from '@teamleader/ui-icons';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';

export interface MarketingLockBadgeProps extends Omit<BoxProps, 'ref'> {
  className?: string;
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'large' | 'fullscreen' | 'smallest' | 'hero'>;
}

const MarketingLockBadge: GenericComponent<MarketingLockBadgeProps> = forwardRef<HTMLElement, MarketingLockBadgeProps>(
  ({ className, size = 'medium', ...others }, ref) => {
    const classNames = cx(theme['wrapper'], theme[`is-${size}`], className);

    return (
      <Box
        data-teamleader-ui="marketing-lock-badge"
        {...others}
        alignItems="center"
        borderRadius="rounded"
        display="flex"
        justifyContent="center"
        className={classNames}
        ref={ref}
      >
        <Icon className={theme['icon']}>
          <IconLockSmallFilled />
        </Icon>
      </Box>
    );
  },
);

MarketingLockBadge.displayName = 'MarketingLockBadge';

export default MarketingLockBadge;
