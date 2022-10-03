import React from 'react';

import Box from '../box';
import Island from '../island';
import Section from '../section';
import IconButton from '../iconButton';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';
import { COLORS, SIZES } from '../../constants';

export interface BannerProps {
  /** The content to display inside the banner. */
  children?: React.ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The color of the banner. */
  color?: typeof COLORS[number] | 'white';
  /** The size of the banner. */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  /** The icon displayed on the left inside the banner. */
  icon?: React.ReactElement;
  /** Callback function that is fired when the close button of the banner is clicked. */
  onClose?(...args: unknown[]): unknown;
  /** If true, component will take the full width of it's container. */
  fullWidth?: boolean;
}

const Banner = ({ children, className, color = 'white', icon, onClose, fullWidth, ...others }: BannerProps) => {
  const Element = fullWidth ? Section : Island;

  return (
    <Element data-teamleader-ui="banner" className={className} {...others}>
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
    </Element>
  );
};

export default Banner;
