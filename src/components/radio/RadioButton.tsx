import cx from 'classnames';
import omit from 'lodash.omit';
import React, { useRef, MouseEvent, ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import { SIZES } from '../../constants';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface RadioButtonProps extends Omit<BoxProps, 'className' | 'children'> {
  checked?: boolean;
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (checked: boolean, event: MouseEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  label?: string;
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'tiny' | 'hero'>;
  value: string | boolean;
}

const RadioButton: GenericComponent<RadioButtonProps> = ({
  checked = false,
  children,
  className,
  disabled = false,
  name,
  onChange,
  onMouseEnter,
  onMouseLeave,
  label,
  size = 'medium',
  ...others
}) => {
  const inputNode = useRef<HTMLInputElement | null>(null);
  const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBodyCompact : TextDisplay;

  const restProps = omit(others, ['onChange']);
  const boxProps = pickBoxProps(restProps);
  const inputProps = omitBoxProps(restProps);

  const classNames = cx(
    theme['radiobutton'],
    theme[`is-${size}`],
    {
      [theme['is-checked']]: checked,
      [theme['is-disabled']]: disabled,
    },
    className,
  );

  const blur = () => {
    if (inputNode.current) {
      inputNode.current.blur();
    }
  };

  const handleToggle = (event: React.MouseEvent) => {
    if (event.pageX !== 0 && event.pageY !== 0) {
      blur();
    }

    if (!disabled && onChange) {
      onChange(!checked, event);
    }
  };

  return (
    <Box
      element="label"
      data-teamleader-ui="radiobutton"
      className={classNames}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...boxProps}
    >
      <input
        className={theme['input']}
        type="radio"
        checked={checked}
        disabled={disabled}
        onClick={handleToggle}
        readOnly
        ref={inputNode}
        name={name}
        {...inputProps}
      />
      <span className={theme['shape']} />
      {(label || children) && (
        <span className={theme['label']}>
          {label && (
            <TextElement element="span" color={disabled ? 'neutral' : 'teal'}>
              {label}
            </TextElement>
          )}
          {children}
        </span>
      )}
    </Box>
  );
};

export default RadioButton;
