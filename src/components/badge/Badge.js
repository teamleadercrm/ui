import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { colorsWithout } from '../../constants';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class Badge extends PureComponent {
  handleMouseUp = event => {
    this.badgeNode.getNode().blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = event => {
    this.badgeNode.getNode().blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const {
      children,
      className,
      disabled,
      element,
      icon,
      iconPlacement,
      inherit,
      inverse,
      color,
      ...others
    } = this.props;

    const classNames = cx(
      theme['badge'],
      theme[color],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-inherit']]: inherit,
        [theme['is-inverse']]: inverse,
      },
      className,
    );

    return (
      <Box
        className={classNames}
        data-teamleader-ui="badge"
        element={element}
        ref={node => (this.badgeNode = node)}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        paddingHorizontal={2}
        paddingVertical={1}
        {...others}
      >
        {icon && iconPlacement === 'left' && <span className={theme['icon']}>{icon}</span>}
        {inherit ? (
          <span className={theme['label']}>{children}</span>
        ) : (
          <TextBody className={theme['label']} element="span">
            {children}
          </TextBody>
        )}
        {icon && iconPlacement === 'right' && <span className={theme['icon']}>{icon}</span>}
      </Box>
    );
  }
}

Badge.propTypes = {
  /** The content to display inside the badge. */
  children: PropTypes.any,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** Sets a custom element to use as the badge component wrapper. */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** The icon displayed inside the badge. */
  icon: PropTypes.element,
  /** The position of the icon inside the badge. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** If true, component will adapt styles from it's parent component. */
  inherit: PropTypes.bool,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** Add a color theme to the badge */
  color: PropTypes.oneOf(colorsWithout(['teal'])),
};

Badge.defaultProps = {
  disabled: false,
  element: 'button',
  iconPlacement: 'left',
  inherit: true,
  inverse: false,
  color: 'neutral',
};

Badge.displayName = 'Badge';

export default Badge;
