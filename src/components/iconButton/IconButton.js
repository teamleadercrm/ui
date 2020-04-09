import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import buttonTheme from '../button/theme.css';
import theme from './theme.css';

class IconButton extends Component {
  handleMouseUp = (event) => {
    this.blur();
    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  };

  handleMouseLeave = (event) => {
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
    const { children, className, disabled, element, icon, size, color, selected, type, ...others } = this.props;

    const classNames = cx(
      buttonTheme['button-base'],
      theme['icon-button'],
      theme[`is-${size}`],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const props = {
      ...others,
      ref: (node) => {
        this.buttonNode = node;
      },
      className: classNames,
      disabled: element === 'button' ? disabled : null,
      element: element,
      onMouseUp: this.handleMouseUp,
      onMouseLeave: this.handleMouseLeave,
      type: element === 'button' ? type : null,
      'data-teamleader-ui': 'icon-button',
    };

    return (
      <Box {...props}>
        <Icon color={color === 'white' ? 'neutral' : color} tint={color === 'white' ? 'lightest' : 'darkest'}>
          {icon}
        </Icon>
        {children}
      </Box>
    );
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
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
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
