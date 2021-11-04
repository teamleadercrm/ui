import React, { createRef, forwardRef, PureComponent } from 'react';
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

  setRef = (ref) => {
    this.badgeNode.current = ref;
    const { forwardedRef } = this.props;
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref);
    } else if (typeof forwardedRef === 'object' && forwardedRef !== null) {
      forwardedRef.current = ref;
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
    const { children, className, disabled, element, icon, iconPlacement, selected, size, onClick, ...others } =
      this.props;

    const classNames = cx(
      theme['badge'],
      theme[`is-${size}`],
      {
        [theme['is-clickable']]: onClick,
        [theme['is-disabled']]: disabled,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;
    const boxElement = element || onClick ? 'button' : 'div';

    return (
      <Box
        className={classNames}
        data-teamleader-ui="badge"
        element={boxElement}
        ref={this.setRef}
        onClick={onClick}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseLeave}
        paddingHorizontal={2}
        type={boxElement === 'button' ? 'button' : undefined}
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
  /** Callback function that is fired when clicking on the component. */
  onClick: PropTypes.func,
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
  iconPlacement: 'left',
  size: 'medium',
};

const ForwardedBadge = forwardRef((props, ref) => <Badge {...props} forwardedRef={ref} />);

ForwardedBadge.displayName = 'Badge';

export default ForwardedBadge;
