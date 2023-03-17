import React from 'react';
import cx from 'classnames';

import Box, { BoxProps, Padding } from '../box';
import IconButton from '../iconButton';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import { COLORS, SIZES } from '../../constants';

const PADDINGS: Record<'small' | 'medium' | 'large', Padding> = {
  small: 3,
  medium: 4,
  large: 5,
};

export interface BannerProps extends Omit<BoxProps, 'size'> {
  /** The content to display inside the banner. */
  children?: React.ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The icon displayed on the left inside the banner. */
  icon?: React.ReactElement;
  /** Callback function that is fired when the close button of the banner is clicked. */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  /** If true, component will take the full width of it's container. */
  fullWidth?: boolean;
  /** The color for the Banner background and border */
  color?: Exclude<typeof COLORS[number], 'teal'> | 'white';
  /** The size of the Banner component */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'smallest' | 'hero' | 'fullscreen'>;
}

const Banner = ({
  children,
  className,
  color = 'white',
  size = 'medium',
  icon,
  onClose,
  fullWidth,
  ...others
}: BannerProps) => {
  const classNames = cx(className, theme[color], theme['banner'], { [theme['banner_full-width']]: fullWidth });

  return (
    <Box
      data-teamleader-ui="banner"
      className={classNames}
      color={color}
      padding={PADDINGS[size]}
      borderRadius={fullWidth ? 'square' : 'rounded'}
      {...others}
    >
      <div className={theme['inner']}>
        {icon && <span className={theme['icon']}>{icon}</span>}
        <Box flex={1} element="span" paddingRight={onClose && 7}>
          {children}
        </Box>
        {onClose && (
          <IconButton
            className={theme['close-button']}
            icon={<IconCloseMediumOutline />}
            color={color === 'white' ? 'neutral' : color}
            onClick={onClose}
          />
        )}
      </div>
    </Box>
  );
};

export default Banner;
