import React, { ChangeEvent, forwardRef, useState } from 'react';
import { GenericComponent } from '../../@types/types';
import SingleLineInputBase, { SingleLineInputBaseProps } from './SingleLineInputBase';

interface InputProps extends Omit<SingleLineInputBaseProps, 'onChange'> {
  /** Callback function that is fired when the component's value changes. */
  onChange?: (event: ChangeEvent<HTMLElement>, value: string) => void;
}

const Input: GenericComponent<InputProps> = forwardRef<HTMLElement, InputProps>(
  ({ onChange, ...others }: InputProps, forwardedRef) => {
    const [stateValue, setStateValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setStateValue(event.currentTarget.value);
      onChange && onChange(event, event.currentTarget.value);
    };

    return <SingleLineInputBase ref={forwardedRef} value={stateValue} onChange={handleChange} {...others} />;
  },
);

Input.displayName = 'Input';

export default Input;
