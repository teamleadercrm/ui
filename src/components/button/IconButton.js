import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

class IconButton extends Component {
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
    const { children, className, disabled, element, icon, size, color, type, ...others } = this.props;

    const classNames = cx(
      uiUtilities['reset-box-sizing'],
      uiUtilities['reset-font-smoothing'],
      theme['button-base'],
      theme['button'],
      theme['icon-button'],
      theme[color],
      {
        [theme['is-disabled']]: disabled,
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

    return React.createElement(element, props, icon, children);
  }
}

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  icon: PropTypes.element,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
  color: PropTypes.oneOf(['neutral', 'white', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  type: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  element: 'button',
  size: 'medium',
  color: 'neutral',
  type: 'button',
};

export default IconButton;
