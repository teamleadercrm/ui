import cx from 'classnames';
import React, { ChangeEvent, ReactNode, useRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';

export interface ToggleProps extends Omit<BoxProps, 'className' | 'size'> {
  checked?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  /** The maximum number of lines the label can take */
  maxLines?: number;
  name?: string;
  className?: string;
  label?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen'>;
}

const Toggle: GenericComponent<ToggleProps> = ({
  checked = false,
  children,
  disabled = false,
  maxLines,
  className,
  label,
  onChange,
  size = 'medium',
  ...others
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const boxProps = pickBoxProps(others);
  const inputProps = omitBoxProps(others);

  const blur = () => {
    if (ref.current) {
      ref.current.blur();
    }
  };

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    blur();
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
    },
    className,
  );

  const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBodyCompact : TextDisplay;

  return (
    <Box element="label" data-teamleader-ui="toggle" className={classNames} {...boxProps}>
      <input
        className={theme['input']}
        type="checkbox"
        hidden
        checked={checked}
        disabled={disabled}
        onChange={handleToggle}
        ref={ref}
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
        </span>
      )}
    </Box>
  );
};

export default Toggle;
