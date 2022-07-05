import React, { ReactNode } from 'react';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import { IconLockSmallFilled } from '@teamleader/ui-icons';
import { UITextBody, UITextSmall } from '../typography';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';

interface MarketingStatusLabelProps extends Omit<BoxProps, 'ref'> {
  children?: ReactNode;
  fullWidth?: boolean;
  size?: Exclude<typeof SIZES[number], 'tiny' | 'large' | 'fullscreen' | 'smallest' | 'hero'>;
  className?: string;
}

const MarketingStatusLabel: GenericComponent<MarketingStatusLabelProps> = ({
  children,
  className,
  fullWidth = false,
  size = 'medium',
  ...others
}) => {
  const classNames = cx(theme['wrapper'], theme[`is-${size}`], className);

  const TextElement = size === 'small' ? UITextSmall : UITextBody;

  return (
    <Box
      {...others}
      alignItems="center"
      display={fullWidth ? 'flex' : 'inline-flex'}
      justifyContent="center"
      className={classNames}
      paddingHorizontal={2}
    >
      <TextElement className={theme['text']} marginRight={2}>
        {children}
      </TextElement>
      <Icon className={theme['icon']}>
        <IconLockSmallFilled />
      </Icon>
    </Box>
  );
};

export default MarketingStatusLabel;
