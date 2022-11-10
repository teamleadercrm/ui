import React from 'react';

import Box from '../box';
import Island, { IslandProps } from '../island';
import Section, { SectionProps } from '../section';
import IconButton from '../iconButton';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

export interface BannerProps extends SectionProps, IslandProps {
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
}

const Banner = ({ children, className, color = 'white', icon, onClose, fullWidth, ...others }: BannerProps) => {
  const Element = fullWidth ? Section : Island;

  return (
    <Element data-teamleader-ui="banner" className={className} color={color} {...others}>
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
