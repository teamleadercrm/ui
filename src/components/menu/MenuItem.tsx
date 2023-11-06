import React, { ReactNode, MouseEvent, CSSProperties, forwardRef } from 'react';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import Icon from '../icon';
import { TextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface MenuItemProps extends Omit<BoxProps, 'children' | 'className' | 'element' | 'style'> {
  /** A caption displayed underneath the label. */
  caption?: string;
  /** The content to display inside the menu item. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** If true, the color of label and icon will be ruby */
  destructive?: boolean;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** The element to render. */
  element?: React.ElementType;
  /** The icon to display on the left side of the label. */
  icon?: ReactNode;
  /** The text used as the label for the component. */
  label?: React.ReactNode;
  /** Callback function that is fired when clicking the component. */
  onClick?: (e: MouseEvent) => void;
  /** If true, component will look active. */
  selected?: boolean;
  /** Inline style passed to element */
  style?: CSSProperties;
}

const MenuItem: GenericComponent<MenuItemProps> = forwardRef<HTMLElement, MenuItemProps>(
  (
    {
      onClick,
      disabled = false,
      icon,
      caption,
      children,
      className = '',
      style,
      destructive = false,
      element = 'button',
      label,
      selected = false,
      ...others
    },
    ref,
  ) => {
    const handleClick = (event: MouseEvent) => {
      if (onClick && !disabled) {
        onClick(event);
      }
    };

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
      <Box {...boxProps} data-teamleader-ui="menu-item" display="flex" element="li" ref={ref}>
        <Box
          onClick={handleClick}
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
          {...(element === 'a' && disabled && { tabIndex: -1 })}
          {...restProps}
        >
          {icon && (
            <Icon color={color} tint={tint} marginRight={3}>
              {icon}
            </Icon>
          )}
          <Box
            flex="1 1 auto"
            className={cx({
              [theme['menu-item-text-container']]: element === 'a',
            })}
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
  },
);

MenuItem.displayName = 'MenuItem';

export default MenuItem;
