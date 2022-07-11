import React, { ChangeEvent, forwardRef, useState } from 'react';
import { GenericComponent } from '../../@types/types';
import SingleLineInputBase, { SingleLineInputBaseProps } from './SingleLineInputBase';

export interface InputProps extends Omit<SingleLineInputBaseProps, 'onChange'> {
  /** Callback function that is fired when the component's value changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, value: string) => void;
  /** Callback function that is fired when the component is focussed. */
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  /** Callback function that is fired when the component is clicked. */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Current value of the input element. */
  value?: string | number;
}

const Input: GenericComponent<InputProps> = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ value, onChange, ...others }: InputProps, forwardedRef) => {
    const [stateValue, setStateValue] = useState(value);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setStateValue(event.currentTarget.value);
      onChange && onChange(event, event.currentTarget.value);
    };

    return (
      <SingleLineInputBase
        ref={forwardedRef}
        value={typeof value !== 'undefined' ? value : stateValue}
        onChange={handleChange}
        {...others}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
