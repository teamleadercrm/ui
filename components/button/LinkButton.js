import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class LinkButton extends PureComponent {
  handleMouseUp = event => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = event => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const { children, className, disabled, element, icon, iconPlacement, inverse, label, size, ...others } = this.props;

    const classNames = cx(
      theme['link-button'],
      {
        [theme['has-icon-only']]: (!children && !label) || (Array.isArray(children) && !children[0] && !label),
        [theme['is-disabled']]: disabled,
        [theme['is-inverse']]: inverse,
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
      'data-teamleader-ui': 'link-button',
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
    );
  }
}

LinkButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  icon: PropTypes.element,
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  inverse: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

LinkButton.defaultProps = {
  className: '',
  element: 'button',
  iconPlacement: 'left',
  inverse: false,
  size: 'medium',
};

export default LinkButton;
