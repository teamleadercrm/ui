import React, { forwardRef } from 'react';
import ReactInputMask, { InputState } from 'react-input-mask';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import { IconTimerSmallOutline } from '@teamleader/ui-icons';

const isValidTime = (input: string) => /([0-1][0-9]|[2][0-3]):([0-5][0-9])/.test(input);

interface TimeInputProps {
  /** Boolean indicating whether the input should render as disabled. */
  disabled?: boolean;
  /** Boolean indicating whether the input should render as read only. */
  readOnly?: boolean;
}

const TimeInput = forwardRef((props: TimeInputProps, ref) => {
  const { readOnly, disabled } = props;

  const beforeMaskedValueChange = (
    { value: newValue, selection }: InputState,
    { value: oldValue }: InputState,
  ): InputState => {
    if (!isValidTime(newValue)) {
      return { value: oldValue, selection };
    }

    return { value: newValue, selection };
  };

  return (
    <ReactInputMask {...props} mask="99:99" maskChar="0" beforeMaskedValueChange={beforeMaskedValueChange}>
      {(inputProps: TimeInputProps) => (
        <SingleLineInputBase
          {...inputProps}
          ref={ref}
          autoComplete="off"
          readOnly={readOnly}
          disabled={disabled}
          prefix={
            <Icon color="neutral" tint="darkest">
              <IconTimerSmallOutline />
            </Icon>
          }
        />
      )}
    </ReactInputMask>
  );
});

TimeInput.displayName = 'TimeInput';

export default TimeInput;
