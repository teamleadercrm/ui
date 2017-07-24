import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FontIcon from '../font_icon';
import omit from 'lodash.omit';

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
    large: PropTypes.bool,
    medium: PropTypes.bool,
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
      small: PropTypes.string,
      medium: PropTypes.string,
      large: PropTypes.string,
    }),
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    bordered: false,
    primary: false,
    processing: false,
    small: true,
    medium: false,
    large: false,
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

  getSize = () => {
    if (this.props.medium) {
      return 'medium';
    } else if (this.props.large) {
      return 'large';
    }
    return 'small';
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

    const rest = omit(others, [ 'primary', 'bordered', 'small', 'medium', 'large' ]);

    const element = href ? 'a' : 'button';
    const level = this.getLevel();
    const shape = this.getShape();
    const state = this.getState();
    const size = this.getSize();

    const classes = cx(
      theme.button,
      {
        [theme[ level ]]: theme[ level ],
        [theme[ shape ]]: theme[ shape ],
        [theme[ state ]]: theme[ state ],
        [theme[ size ]]: theme[ size ],
        [theme.iconOnly]: !label && !children,
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
