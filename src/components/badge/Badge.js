import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import { UITextSmall, UITextBody, UITextDisplay } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class Badge extends PureComponent {
  badgeNode = createRef();

  handleMouseUp = (event) => {
    this.badgeNode.current.blur();

    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.badgeNode.current.blur();

    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  renderIcon = () => {
    const { icon } = this.props;

    return (
      <Icon className={theme['icon']} color="teal" tint="darkest">
        {icon}
      </Icon>
    );
  };

  render() {
    const { children, className, disabled, element, icon, iconPlacement, selected, size, ...others } = this.props;

    const classNames = cx(
      theme['badge'],
      theme[`is-${size}`],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;

    return (
      <Box
        className={classNames}
        data-teamleader-ui="badge"
        element={element}
        ref={this.badgeNode}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        paddingHorizontal={2}
        {...others}
      >
        {icon && iconPlacement === 'left' && this.renderIcon()}
        {children && (
          <TextElement className={theme['label']} element="span">
            {children}
          </TextElement>
        )}
        {icon && iconPlacement === 'right' && this.renderIcon()}
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
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Badge.defaultProps = {
  disabled: false,
  element: 'button',
  iconPlacement: 'left',
  size: 'medium',
};

export default Badge;
