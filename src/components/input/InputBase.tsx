import React, { ChangeEvent, FocusEvent, ForwardedRef, forwardRef, HTMLProps } from 'react';
import cx from 'classnames';
import theme from './theme.css';
import { omitBoxProps } from '../box';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

export interface InputBaseProps
  extends Pick<
    HTMLProps<HTMLInputElement | HTMLTextAreaElement>,
    'autoFocus' | 'inputMode' | 'onKeyDown' | 'placeholder'
  > {
  /** Boolean indicating whether the input text should render in bold. */
  bold?: boolean;
  /** Sets a class name for the wrapper to give custom styles. */
  className?: string;
  /** Boolean indicating whether the input should render as disabled. */
  disabled?: boolean;
  /** The element to render. */
  element?: 'input' | 'textarea';
  /** Boolean indicating whether the input should render as inverse. */
  inverse?: boolean;
  /** Callback function that is fired when blurring the input field. */
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  /** Callback function that is fired when the component's value changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** Callback function that is fired when focusing the input field. */
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  /** Boolean indicating whether the input should render as read only. */
  readOnly?: boolean;
  /** Forwarded ref element. */
  ref?: ForwardedRef<HTMLElement>;
  /** Size of the input element. */
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'hero'>;
  /** If true, the input text is aligned to the right. */
  textAlignRight?: boolean;
  /** Type of the input element. It can be a valid HTML5 input type. */
  type?:
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
  value?: string | number;
}

const InputBase: GenericComponent<InputBaseProps> = forwardRef<HTMLElement, InputBaseProps>(
  (
    {
      bold,
      className,
      disabled = false,
      element = 'input',
      inverse = false,
      readOnly = false,
      size = 'medium',
      textAlignRight,
      type = 'text',
      ...others
    }: InputBaseProps,
    forwardedRef,
  ) => {
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
      ref: forwardedRef,
      disabled,
      readOnly,
      type,
      ...omitBoxProps(others),
    });
  },
);

InputBase.displayName = 'InputBase';

export default InputBase;
