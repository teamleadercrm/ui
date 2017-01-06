import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import FontIcon from '../font_icon';
import theme from './theme.css';

class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    flat: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    label: PropTypes.string,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    primary: PropTypes.bool,
    type: PropTypes.string
  };

  static defaultProps = {
    accent: false,
    className: '',
    flat: false,
    primary: false,
    type: 'button'
  };

  handleMouseUp = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
    this.refs.button.blur();
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render () {
    const {
      children,
      className,
      flat,
      floating,
      href,
      icon,
      label,
      type,
      primary,
      raised,
      accent,
      ...others
    } = this.props;

    const element = href ? 'a' : 'button';
    const level = primary ? 'primary' : accent ? 'accent' : 'neutral';
    const shape = flat ? 'flat' : raised ? 'raised' : floating ? 'floating' : 'flat';

    const classes = cx(
      theme.button,
      {
        [theme[level]]: true,
        [theme[shape]]: true
      },
      className
    );

    const props = {
      ...others,
      href,
      ref: 'button',
      className: classes,
      disabled: this.props.disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button'
    };

    return React.createElement(element, props,
      icon ? <FontIcon className={theme.icon} value={icon} /> : null,
      label,
      children
    );
  }
}

export default Button;
