import { IconInfoBadgedSmallFilled } from '@teamleader/ui-icons';
import cx from 'classnames';
import React, { ChangeEvent, ReactNode, forwardRef, useRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import Tooltip, { TooltipProps } from '../tooltip';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';

const TooltippedIcon = Tooltip(Icon);

export interface ToggleProps
  extends Pick<Partial<TooltipProps>, 'tooltip' | 'tooltipPosition'>,
    Omit<BoxProps, 'className' | 'size'> {
  children?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  /** The maximum number of lines the label can take */
  maxLines?: number;
  name?: string;
  className?: string;
  label?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  labelPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Toggle: GenericComponent<ToggleProps> = forwardRef<HTMLElement, ToggleProps>(
  (
    {
      checked = false,
      children,
      disabled = false,
      maxLines,
      className,
      label,
      onChange,
      size = 'medium',
      tooltip,
      tooltipPosition,
      labelPosition = 'right',
      fullWidth = false,
      ...others
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const boxProps = pickBoxProps(others);
    const inputProps = omitBoxProps(others);

    const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(event);
      }
    };
    const classNames = cx(
      theme['toggle'],
      theme[`is-${size}`],
      {
        [theme['is-checked']]: checked,
        [theme['is-disabled']]: disabled,
        [theme['label-on-left']]: labelPosition === 'left',
        [theme['is-full-width']]: fullWidth,
      },
      className,
    );

    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBodyCompact : TextDisplay;

    return (
      <Box element="label" data-teamleader-ui="toggle" className={classNames} {...boxProps} ref={ref}>
        <input
          className={theme['input']}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleToggle}
          ref={inputRef}
          {...inputProps}
        />
        <span className={theme['track']}>
          <span className={theme['thumb']} />
        </span>
        {(label || children) && (
          <span className={theme['label']}>
            {label && (
              <TextElement element="span" color={disabled ? 'neutral' : 'teal'} maxLines={maxLines}>
                {label}
              </TextElement>
            )}
            {children}
            {tooltip && (
              <TooltippedIcon
                tooltip={<TextSmall>{tooltip}</TextSmall>}
                tooltipSize="small"
                tooltipPosition={tooltipPosition}
                color="teal"
                tint="darkest"
                marginLeft={1}
              >
                <IconInfoBadgedSmallFilled />
              </TooltippedIcon>
            )}
          </span>
        )}
      </Box>
    );
  },
);

Toggle.displayName = 'Toggle';

export default Toggle;
