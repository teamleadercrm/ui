import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Icon from '../icon';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

class MenuItem extends PureComponent {
  handleClick = (event) => {
    const { disabled, onClick } = this.props;

    if (onClick && !disabled) {
      onClick(event, this);
    }
  };

  render() {
    const { icon, caption, children, className, style, destructive, element, label, selected, disabled, ...others } =
      this.props;

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

    const boxProps = pickBoxProps(others);
    const restProps = omitBoxProps(others);

    return (
      <Box {...boxProps} data-teamleader-ui="menu-item" display="flex" element="li">
        <Box
          onClick={this.handleClick}
          alignItems="center"
          className={classNames}
          style={style}
          disabled={disabled}
          display="flex"
          element={element}
          flex="1 1 auto"
          paddingHorizontal={3}
          paddingVertical={2}
          textAlign="left"
          {...(element === 'a' && disabled && { tabIndex: '-1' })}
          {...restProps}
        >
          {icon && (
            <Icon color={color} tint={tint} marginRight={3}>
              {icon}
            </Icon>
          )}
          <Box
            className={cx({
              [theme['menu-item-text-container']]: element === 'a',
            })}
            flex="1 1 auto"
          >
            {children}
            {label && (
              <TextBody color={color} tint={tint}>
                {label}
              </TextBody>
            )}
            {caption && (
              <TextBody color="neutral" tint="darkest">
                {caption}
              </TextBody>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
}

MenuItem.propTypes = {
  /** A caption displayed underneath the label. */
  caption: PropTypes.string,
  /** The content to display inside the menu item. */
  children: PropTypes.any,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** If true, the color of label and icon will be ruby */
  destructive: PropTypes.bool,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** The element to render. */
  element: PropTypes.oneOf(['a', 'button']),
  /** The icon to display on the left side of the label. */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** The text used as the label for the component. */
  label: PropTypes.string,
  /** Callback function that is fired when clicking the component. */
  onClick: PropTypes.func,
  /** If true, component will look active. */
  selected: PropTypes.bool,
};

MenuItem.defaultProps = {
  className: '',
  destructive: false,
  disabled: false,
  element: 'button',
  selected: false,
};

export default MenuItem;
