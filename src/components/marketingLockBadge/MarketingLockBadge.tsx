import React from 'react';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import { IconLockSmallFilled } from '@teamleader/ui-icons';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';

interface MarketingLockBadgeProps extends Omit<BoxProps, 'ref'> {
  className?: string;
  size?: Exclude<typeof SIZES[number], 'tiny' | 'large' | 'fullscreen' | 'smallest' | 'hero'>;
}

const MarketingLockBadge: GenericComponent<MarketingLockBadgeProps> = ({ className, size = 'medium', ...others }) => {
  const classNames = cx(theme['wrapper'], theme[`is-${size}`], className);

  return (
    <Box
      {...others}
      alignItems="center"
      borderRadius="rounded"
      display="flex"
      justifyContent="center"
      className={classNames}
    >
      <Icon className={theme['icon']}>
        <IconLockSmallFilled />
      </Icon>
    </Box>
  );
};

export default MarketingLockBadge;
