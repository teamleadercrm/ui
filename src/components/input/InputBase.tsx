import React, { forwardRef } from 'react';
import cx from 'classnames';

import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { omitBoxProps } from '../box';

interface InputBaseProps extends Omit<BoxProps, 'size' | 'ref'> {
  /** Boolean indicating whether the input text should render in bold. */
  bold: boolean;
  /** Sets a class name for the wrapper to give custom styles. */
  className: string;
  /** Boolean indicating whether the input should render as disabled. */
  disabled: boolean;
  /** The element to render. */
  element: 'input' | 'textarea';
  /** Boolean indicating whether the input should render as inverse. */
  inverse: boolean;
  /** Callback function that is fired when blurring the input field. */
  onBlur: (event?: React.FocusEvent<HTMLElement>) => void;
  /** Callback function that is fired when focusing the input field. */
  onFocus: (event?: React.FocusEvent<HTMLElement>) => void;
  /** Callback function that is fired when the component's value changes. */
  onChange: (event?: React.ChangeEvent<HTMLElement>) => void;
  /** Boolean indicating whether the input should render as read only. */
  readOnly: boolean;
  /** Size of the input element. */
  size: 'tiny' | 'small' | 'medium' | 'large';
  /** If true, the input text is aligned to the right. */
  textAlignRight: boolean;
  /** Type of the input element. It can be a valid HTML5 input type. */
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  /** Current value of the input element. */
  value: string | number;
}

const InputBase = forwardRef(
  ({ bold, className, element = 'input', inverse, size, textAlignRight, ...others }: InputBaseProps, ref) => {
    const classNames = cx(
      theme['input'],
      theme[`is-${size}`],
      {
        [theme['is-inverse']]: inverse,
        [theme['is-bold']]: bold,
        [theme['has-text-align-right']]: textAlignRight,
      },
      className,
    );

    return React.createElement(element, {
      className: classNames,
      ref,
      ...omitBoxProps(others),
    });
  },
);

export default InputBase;
