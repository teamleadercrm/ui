import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../box';
import Island from '../island';
import Section from '../section';
import IconButton from '../iconButton';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

/** @type {React.ComponentType<any>} */
class Banner extends PureComponent {
  getCloseButtonColor() {
    const { color } = this.props;
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

Banner.propTypes = {
  /** The content to display inside the banner. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** The color of the banner. */
  color: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  /** The icon displayed on the left inside the banner. */
  icon: PropTypes.element,
  /** Callback function that is fired when the close button of the banner is clicked. */
  onClose: PropTypes.func,
  /** If true, component will take the full width of it's container. */
  fullWidth: PropTypes.bool,
};

Banner.defaultProps = {
  color: 'white',
};

export default Banner;
