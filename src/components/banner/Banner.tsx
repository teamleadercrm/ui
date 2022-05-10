import React, { PureComponent } from 'react';

import Box from '../box';
import Island from '../island';
import Section from '../section';
import IconButton from '../iconButton';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

interface BannerProps {
  /** The content to display inside the banner. */
  children?: React.ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The color of the banner. */
  color?: 'white' | 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua';
  /** The size of the banner. */
  size?: 'small' | 'medium' | 'large';
  /** The icon displayed on the left inside the banner. */
  icon?: React.ReactElement;
  /** Callback function that is fired when the close button of the banner is clicked. */
  onClose?(...args: unknown[]): unknown;
  /** If true, component will take the full width of it's container. */
  fullWidth?: boolean;
}

class Banner extends PureComponent<BannerProps> {
  getCloseButtonColor() {
    const { color = 'white' } = this.props;
    return color === 'white' ? 'neutral' : color;
  }

  render() {
    const { children, className, icon, onClose, fullWidth, ...others } = this.props;
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
              color={this.getCloseButtonColor()}
              onClick={onClose}
            />
          )}
        </div>
      </Element>
    );
  }
}

export default Banner;
