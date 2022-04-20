import React, { forwardRef, PureComponent } from 'react';
import InputMask from 'react-input-mask';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import { IconTimerSmallOutline } from '@teamleader/ui-icons';

const isValidTime = (input) => /([0-1][0-9]|[2][0-3]):([0-5][0-9])/.test(input);
class TimeInput extends PureComponent {
  beforeMaskedValueChange = ({ value: newValue, selection }, { value: oldValue }) => {
    if (!isValidTime(newValue)) {
      return { value: oldValue, selection };
    }
    return { value: newValue, selection };
  };

  render() {
    const { disabled, readOnly, forwardedRef } = this.props;
    return (
      <InputMask {...this.props} mask="99:99" maskChar="0" beforeMaskedValueChange={this.beforeMaskedValueChange}>
        {(inputProps) => (
          <SingleLineInputBase
            {...inputProps}
            ref={forwardedRef}
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
      </InputMask>
    );
  }
}

/** @type {React.ComponentType<any>} */
const ForwardedTimeInput = forwardRef((props, ref) => <TimeInput {...props} forwardedRef={ref} />);

ForwardedTimeInput.displayName = 'TimeInput';

export default ForwardedTimeInput;
