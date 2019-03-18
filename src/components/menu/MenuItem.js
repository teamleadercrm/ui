import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class MenuItem extends PureComponent {
  handleClick = event => {
    const { disabled, onClick } = this.props;

    if (onClick && !disabled) {
      onClick(event, this);
    }
  };

  render() {
    const { icon, caption, className, destructive, selected, disabled, ...others } = this.props;

    const classNames = cx(
      theme['menu-item'],
      {
        [theme['is-selected']]: selected,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    const color = destructive ? 'ruby' : disabled ? 'neutral' : 'teal';
    const tint = disabled && destructive ? 'light' : disabled || destructive ? 'dark' : 'darkest';

    return (
      <Box
        {...others}
        alignItems="center"
        className={classNames}
        data-teamleader-ui="menu-item"
        display="flex"
        element="li"
        onClick={this.handleClick}
        paddingHorizontal={3}
      >
        {icon && (
          <Icon color={color} tint={tint} marginRight={3}>
            {icon}
          </Icon>
        )}
        <TextBody color={color} tint={tint} element="span">
          {caption}
        </TextBody>
      </Box>
    );
  }
}

MenuItem.propTypes = {
  /** The text to display inside the component. */
  caption: PropTypes.string,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** If true, the color of caption and icon will be ruby */
  destructive: PropTypes.bool,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** The icon to display on the left side of the caption. */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Callback function that is fired when clicking the component. */
  onClick: PropTypes.func,
  /** If true, component will look active. */
  selected: PropTypes.bool,
};

MenuItem.defaultProps = {
  className: '',
  destructive: false,
  disabled: false,
  selected: false,
};

export default MenuItem;
