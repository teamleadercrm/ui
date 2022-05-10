import React, { forwardRef, ReactNode } from 'react';
import Box from '../box';
import Icon from '../icon';
import { UITextSmall, UITextBody, UITextDisplay } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

interface Props {
  /** The content to display inside the badge. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** Sets a custom element to use as the badge component wrapper. */
  element?: React.ElementType;
  /** The icon displayed inside the badge. */
  icon?: ReactNode;
  /** The position of the icon inside the badge. */
  iconPlacement?: 'left' | 'right';
  /** Callback function that is fired when clicking on the component. */
  onClick?: () => void;
  /** If true, component will be shown in a selected state */
  selected?: boolean;
  /** Size of the button. */
  size?: 'small' | 'medium' | 'large';
}

const Badge = forwardRef(
  (
    {
      children,
      className,
      disabled = false,
      element,
      icon,
      iconPlacement = 'left',
      selected = false,
      size = 'medium',
      onClick,
      ...others
    }: Props,
    ref,
  ) => {
    const renderIcon = () => (
      <Icon className={theme['icon']} color="teal" tint="darkest">
        {icon}
      </Icon>
    );

    const classNames = cx(
      theme['badge'],
      theme[`is-${size}`],
      {
        [theme['is-clickable']]: onClick,
        [theme['is-disabled']]: disabled,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const TextElement = size === 'small' ? UITextSmall : size === 'large' ? UITextDisplay : UITextBody;
    const boxElement = element || onClick ? 'button' : 'div';

    return (
      <Box
        className={classNames}
        data-teamleader-ui="badge"
        element={boxElement}
        ref={ref}
        onClick={onClick}
        paddingHorizontal={2}
        type={boxElement === 'button' ? 'button' : undefined}
        {...others}
      >
        {icon && iconPlacement === 'left' && renderIcon()}
        {children && (
          <TextElement className={theme['label']} element="span">
            {children}
          </TextElement>
        )}
        {icon && iconPlacement === 'right' && renderIcon()}
      </Box>
    );
  },
);

Badge.displayName = 'Badge';

export default Badge;