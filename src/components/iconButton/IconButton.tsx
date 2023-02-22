import cx from 'classnames';
import React, { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { TINTS, COLORS, SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import buttonTheme from '../button/theme.css';
import Icon from '../icon';
import LoadingSpinner from '../loadingSpinner';
import theme from './theme.css';

export interface IconButtonProps extends Omit<BoxProps, 'ref' | 'children' | 'className' | 'element'> {
  /** The content to display inside the button. */
  children?: ReactNode;
  /** A class name for the button to give custom styles. */
  className?: string;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** A custom element to be rendered */
  element?: React.ElementType;
  /** The icon displayed inside the button. */
  icon?: ReactNode;
  /** Size of the button. */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  /** The color which the icon should have */
  color?: typeof COLORS[number] | 'white';
  /** The tint which the icon should have */
  tint?: typeof TINTS[number];
  /** If true, component will be shown in a selected state */
  selected?: boolean;
  /** Type of the button element. */
  type?: string;
  /** If true, component will show a loading spinner instead of icon or children. */
  processing?: boolean;
}

const IconButton: GenericComponent<IconButtonProps> = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      children,
      className = '',
      disabled,
      element = 'button',
      icon,
      size = 'medium',
      color = 'neutral',
      tint = 'darkest',
      selected,
      type = 'button',
      onMouseUp,
      onMouseLeave,
      processing = false,
      ...others
    }: IconButtonProps,
    ref,
  ) => {
    const buttonRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => buttonRef.current);

    const classNames = cx(
      buttonTheme['button-base'],
      theme['icon-button'],
      theme[`is-${size}`],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-processing']]: processing,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const props: BoxProps = {
      ...others,
      ref: buttonRef,
      className: classNames,
      disabled: element === 'button' ? disabled : undefined,
      element,
      type: element === 'button' ? type : undefined,
      'data-teamleader-ui': 'icon-button',
    };

    if (processing) {
      return (
        <Box {...props}>
          <LoadingSpinner
            className={theme['spinner']}
            color={color === 'white' ? 'neutral' : color}
            size={size === 'small' ? 'small' : 'medium'}
            tint={tint}
          />
        </Box>
      );
    }

    return (
      <Box {...props}>
        <Icon color={color === 'white' ? 'neutral' : color} tint={color === 'white' ? 'lightest' : tint}>
          {icon}
        </Icon>
        {children}
      </Box>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
