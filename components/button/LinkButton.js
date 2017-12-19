import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class LinkButton extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    element: PropTypes.element,
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf(['left', 'right']),
    inverse: PropTypes.bool,
    label: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  };

  static defaultProps = {
    className: '',
    iconPlacement: 'left',
    inverse: false,
    size: 'medium',
  };

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
    const {
      children,
      className,
      disabled,
      element,
      icon,
      iconPlacement,
      inverse,
      label,
      size,
      ...others
    } = this.props;

    const Element = element || 'button';

    const classNames = cx(
      theme['link-button'],
      {
        [theme['disabled']]: disabled,
        [theme['icon-only']]: !label && !children,
        [theme['inverse']]: inverse,
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
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      'data-teamleader-ui': 'link-button',
    };

    return React.createElement(
      Element,
      props,
      icon && iconPlacement === 'left' ? icon : null,
      label || children ? (
        <span className={theme['children']}>
          {label}
          {children}
        </span>
      ) : null,
      icon && iconPlacement === 'right' ? icon : null,
    );
  }
}

export default LinkButton;
export { LinkButton };
