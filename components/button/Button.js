import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'outline', 'mint', 'neutral', 'ruby' ]),
    disabled: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element,
    iconPlacement: PropTypes.oneOf([ 'left', 'right' ]),
    inverse: PropTypes.bool,
    label: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    processing: PropTypes.bool,
    size: PropTypes.oneOf([ 'small', 'medium', 'large' ]),
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    color: 'neutral',
    iconPlacement: 'left',
    inverse: false,
    processing: false,
    size: 'medium',
    type: 'button',
  };

  handleMouseUp = (event) => {
    this.buttonNode.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.buttonNode.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render () {
    const {
      children,
      className,
      color,
      disabled,
      href,
      icon,
      iconPlacement,
      inverse,
      label,
      size,
      type,
      processing,
      ...others
    } = this.props;

    const element = href ? 'a' : 'button';

    const classes = cx(
      theme.button,
      theme[ color ],
      {
        [theme.iconOnly]: !label && !children,
        [theme.inverse]: inverse && color === 'outline',
        [theme.processing]: processing,
        [theme[ size ]]: theme[ size ],
      },
      className
    );

    const props = {
      ...others,
      href,
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classes,
      disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(element, props,
      icon && iconPlacement === 'left' ? icon : null,
      label || children ? <span className={theme.children}>{label}{children}</span> : null,
      icon && iconPlacement === 'right' ? icon : null,
      processing ? <div className={theme.spinner} /> : null
    );
  }
}

export default Button;
export { Button };
