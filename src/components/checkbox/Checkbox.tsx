import { IconCheckmarkMediumOutline, IconCheckmarkSmallOutline, IconMinusSmallOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import omit from 'lodash.omit';
import React, { forwardRef, ReactNode } from 'react';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import { TextBodyCompact, TextDisplay, TextSmall } from '../typography';
import theme from './theme.css';
import { BoxProps } from '../box/Box';

interface CheckboxProps extends Omit<BoxProps, 'onChange' | 'size'> {
  /** If true, the checkbox will be checked. */
  checked?: boolean;
  /** The content to display next to the checkbox. */
  children?: ReactNode;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** Name for form input. */
  name?: string;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The textual label displayed next to the checkbox. */
  label?: string;
  /** Callback function that is fired when checkbox is toggled. */
  onChange?: void;
  /** Indicate whether the checkbox is neither checked or unchecked. */
  indeterminate?: boolean;
  /** Size of the checkbox. */
  size?: 'small' | 'medium' | 'large';
}

const Checkbox = forwardRef(
  (
    {
      checked = false,
      disabled = false,
      className,
      size = 'medium',
      label,
      children,
      indeterminate = false,
      onChange,
      ...others
    }: CheckboxProps,
    ref,
  ) => {
    const handleToggle = (event) => {
      if (!disabled && onChange) {
        onChange(!checked, event);
      }
    };

    const TextElement = size === 'small' ? TextSmall : size === 'medium' ? TextBodyCompact : TextDisplay;
    const IconCheckmark = size === 'large' ? IconCheckmarkMediumOutline : IconCheckmarkSmallOutline;

    const restProps = omit(others, ['onChange']);
    const boxProps = pickBoxProps(restProps);
    const inputProps = omitBoxProps(restProps);

    const classNames = cx(
      theme['checkbox'],
      theme[`is-${size}`],
      {
        [theme['is-checked']]: checked || indeterminate,
        [theme['is-disabled']]: disabled,
      },
      className,
    );

    return (
      <Box element="label" data-teamleader-ui="checkbox" className={classNames} {...boxProps}>
        <input
          className={theme['input']}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onClick={handleToggle}
          ref={ref}
          readOnly
          {...inputProps}
        />
        <span className={theme['shape']}>
          {checked ? <IconCheckmark className={theme['icon']} /> : <IconMinusSmallOutline className={theme['icon']} />}
        </span>
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
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
