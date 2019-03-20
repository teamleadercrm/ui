import React, { PureComponent } from 'react';
import InputMask from 'react-input-mask';
import Icon from '../icon';
import SingleLineInputBase from './SingleLineInputBase';
import { IconTimerSmallOutline } from '@teamleader/ui-icons';

class TimeInput extends PureComponent {
  render() {
    return (
      <InputMask {...this.props} mask="99:99" maskChar="0">
        {inputProps => (
          <SingleLineInputBase
            {...inputProps}
            autoComplete="off"
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

export default TimeInput;
