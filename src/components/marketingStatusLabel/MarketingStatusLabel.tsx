import React, { ReactNode } from 'react';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import theme from './theme.css';
import { UITextBody, UITextSmall } from '../typography';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';

export interface MarketingStatusLabelProps extends Omit<BoxProps, 'ref' | 'size'> {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: Exclude<typeof SIZES[number], 'tiny' | 'large' | 'fullscreen' | 'smallest' | 'hero'>;
  icon?: ReactNode;
}

const MarketingStatusLabel: GenericComponent<MarketingStatusLabelProps> = ({
  children,
  className,
  fullWidth = false,
  size = 'medium',
  icon,
  ...others
}) => {
  const classNames = cx(theme['wrapper'], theme[`is-${size}`], className);

  const TextElement = size === 'small' ? UITextSmall : UITextBody;

  return (
    <Box
      data-teamleader-ui="marketing-status-label"
      {...others}
      display={fullWidth ? 'flex' : 'inline-flex'}
      alignItems="center"
      justifyContent="center"
      className={classNames}
      paddingHorizontal={2}
    >
      <TextElement className={theme['text']} marginRight={2}>
        {children}
      </TextElement>
      {icon && <Icon className={theme['icon']}>{icon}</Icon>}
    </Box>
  );
};

export default MarketingStatusLabel;
