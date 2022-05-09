import React, { forwardRef, ReactNode, useRef } from 'react';
import Box from '../box';
import Icon from '../icon';
import { UITextSmall, UITextBody, UITextDisplay } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

interface Props {
  children: ReactNode;
  className: string;
  disabled: boolean;
  element: React.ElementType;
  icon: ReactNode;
  iconPlacement: 'left' | 'right';
  onClick: () => void;
  onMouseLeave: () => void;
  onMouseUp: () => void;
  selected: boolean;
  size: 'small' | 'medium' | 'large';
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
      selected,
      size = 'medium',
      onClick,
      onMouseLeave,
      onMouseUp,
      ...others
    }: Props,
    ref,
  ) => {
    const badgeNode = useRef();

    const handleMouseUp = (event) => {
      badgeNode.current.blur();

      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    const handleMouseLeave = (event) => {
      badgeNode.current.blur();

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };

    const setRef = (refParam) => {
      badgeNode.current = refParam;
      if (typeof ref === 'function') {
        ref(refParam);
      } else if (typeof ref === 'object' && ref !== null) {
        ref.current = refParam;
      }
    };

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
        ref={setRef}
        onClick={onClick}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
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
