import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';
import Section from '../section';
import { IconButton } from '../button';
import theme from './theme.css';
import { IconCloseMediumOutline } from '@teamleader/ui-icons';

class Banner extends PureComponent {
  getCloseButtonColor() {
    const { color } = this.props;
    return color === 'white' ? 'neutral' : color;
  }

  render() {
    const { children, className, icon, onClose, fullWidth, size, ...others } = this.props;
    const Element = fullWidth ? Section : Island;

    return (
      <Element data-teamleader-ui="banner" className={className} size={size} {...others}>
        <div className={theme['inner']}>
          {icon && <span className={theme['icon']}>{icon}</span>}
          <span className={theme['content']}>{children}</span>
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
  /** Size prop to add a padding to the Section or Island. */
  size: PropTypes.string,
};

Banner.defaultProps = {
  color: 'white',
  size: 'medium',
};

export default Banner;
