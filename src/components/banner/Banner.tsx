import React, { PureComponent } from 'react';

import Box from '../box';
import Island from '../island';
import Section from '../section';
import IconButton from '../iconButton';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

interface BannerProps {
  children?: React.ReactNode;
  className?: string;
  color?: 'white' | 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactElement;
  onClose?(...args: unknown[]): unknown;
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
