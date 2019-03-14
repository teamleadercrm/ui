import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../loadingSpinner';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

class Button extends PureComponent {
  getSpinnerColor() {
    const { inverse, level } = this.props;

    switch (level) {
      case 'secondary':
        return 'teal';
      case 'outline':
        return inverse ? 'neutral' : 'teal';
      case 'link':
        return inverse ? 'neutral' : 'aqua';
      default:
        return 'neutral';
    }
  }

  getSpinnerTint() {
    const { inverse, level } = this.props;

    switch (level) {
      case 'secondary':
        return 'darkest';
      case 'outline':
        return inverse ? 'lightest' : 'darkest';
      case 'link':
        return inverse ? 'lightest' : 'dark';
      default:
        return 'lightest';
    }
  }

  handleMouseUp = event => {
    this.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = event => {
    this.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  blur() {
    if (this.buttonNode.blur) {
      this.buttonNode.blur();
    }
  }

  render() {
    const {
      children,
      className,
      level,
      disabled,
      element,
      active,
      fullWidth,
      icon,
      iconPlacement,
      inverse,
      label,
      size,
      type,
      processing,
      ...others
    } = this.props;

    const classNames = cx(
      uiUtilities['reset-box-sizing'],
      uiUtilities['reset-font-smoothing'],
      theme['button-base'],
      theme['button'],
      theme[level],
      {
        [theme['has-icon-only']]: (!children && !label) || (Array.isArray(children) && !children[0] && !label),
        [theme['is-inverse']]: inverse && (level === 'outline' || level === 'link'),
        [theme['is-disabled']]: disabled,
        [theme['is-full-width']]: fullWidth,
        [theme['is-processing']]: processing,
        [theme['is-active']]: active,
        [theme[size]]: theme[size],
      },
      className,
    );

    const props = {
      ...others,
      ref: node => {
        this.buttonNode = node;
      },
      className: classNames,
      disabled: element === 'button' ? disabled : null,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: element === 'button' ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(
      element,
      props,
      icon && iconPlacement === 'left' && icon,
      (label || children) && (
        <span>
          {label}
          {children}
        </span>
      ),
      icon && iconPlacement === 'right' && icon,
      processing && (
        <LoadingSpinner
          className={theme['spinner']}
          color={this.getSpinnerColor()}
          size={size === 'small' ? 'small' : 'medium'}
          tint={this.getSpinnerTint()}
        />
      ),
    );
  }
}

Button.propTypes = {
  /** The content to display inside the button. */
  children: PropTypes.any,
  /** A class name for the button to give custom styles. */
  className: PropTypes.string,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Determines which kind of button to be rendered. */
  level: PropTypes.oneOf(['outline', 'primary', 'secondary', 'destructive', 'link', 'timer']),
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** If true, component will be shown in an active state */
  active: PropTypes.bool,
  /** If true, component will take the full width available. */
  fullWidth: PropTypes.bool,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** If true, component will be rendered in inverse mode (only for the levels "link" and "outline"). */
  inverse: PropTypes.bool,
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will show a loading spinner instead of label or children. */
  processing: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Type of the button element. */
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  element: 'button',
  fullWidth: false,
  level: 'secondary',
  iconPlacement: 'left',
  inverse: false,
  processing: false,
  size: 'medium',
  type: 'button',
};

export default Button;
