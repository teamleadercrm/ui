import React, { ChangeEvent, forwardRef, useState } from 'react';
import SingleLineInputBase, { SingleLineInputBaseProps } from './SingleLineInputBase';

interface InputProps extends Pick<SingleLineInputBaseProps, 'value'> {
  /** Callback function that is fired when the component's value changes. */
  onChange?: (event: ChangeEvent<HTMLElement>, value: string) => void;
}

const Input = forwardRef(({ value, onChange, ...others }: InputProps, forwardedRef) => {
  const [stateValue, setStateValue] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStateValue(event.currentTarget.value);
    onChange && onChange(event, event.currentTarget.value);
  };

  return <SingleLineInputBase ref={forwardedRef} value={stateValue} onChange={handleChange} {...others} />;
});

Input.displayName = 'Input';

export default Input;
