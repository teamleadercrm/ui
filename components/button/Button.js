import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import FontIcon from '../font_icon';
import { omit } from 'lodash';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    bordered: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    label: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    processing: PropTypes.bool,
    theme: PropTypes.shape({
      button: PropTypes.string,
      bordered: PropTypes.string,
      icon: PropTypes.string,
      inverse: PropTypes.string,
      primary: PropTypes.string,
      secondary: PropTypes.string,
      toggle: PropTypes.string,
    }),
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    bordered: false,
    primary: false,
    processing: false,
    type: 'button',
  };

  getLevel = () => {
    if (this.props.primary) {
      return 'primary';
    }
    return 'secondary';
  };

  getShape = () => {
    if (this.props.bordered) {
      return 'bordered';
    }
  };

  getState = () => {
    if (this.props.processing) {
      return 'processing';
    }
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
      href,
      icon,
      label,
      theme,
      type,
      processing,
      ...others
    } = this.props;

    const rest = omit(others, [ 'primary', 'bordered' ]);

    const element = href ? 'a' : 'button';
    const level = this.getLevel();
    const shape = this.getShape();
    const state = this.getState();

    const classes = classnames(
      theme.button,
      {
        [theme[ level ]]: theme[ level ],
        [theme[ shape ]]: theme[ shape ],
        [theme[ state ]]: theme[ state ],
        [theme.iconOnly]: !this.props.label && !this.props.children,
      },
      className
    );

    const props = {
      ...rest,
      href,
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(element, props,
      icon && !processing ? <FontIcon className={theme.icon} value={icon} /> : null,
      processing ? <FontIcon className={theme.icon} value="spinner" /> : null,
      label,
      children
    );
  }
}

export default Button;
export { Button };
