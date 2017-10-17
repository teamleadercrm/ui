import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class IconButton extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.element,
    inverse: PropTypes.bool,
    onMouseLeave: PropTypes.func,
    onMouseUp: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    inverse: false,
    size: 'medium',
    type: 'button',
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
    const { children, className, disabled, href, icon, inverse, size, type, ...others } = this.props;

    const element = href ? 'a' : 'button';

    const classNames = cx(
      theme.button,
      theme.iconButton,
      theme.iconOnly,
      {
        [theme.inverse]: inverse,
        [theme[size]]: theme[size],
      },
      className,
    );

    const props = {
      ...others,
      href,
      ref: node => {
        this.buttonNode = node;
      },
      className: classNames,
      disabled,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: !href ? type : null,
      'data-teamleader-ui': 'button',
    };

    return React.createElement(element, props, icon, children);
  }
}

export default IconButton;
export { IconButton };
