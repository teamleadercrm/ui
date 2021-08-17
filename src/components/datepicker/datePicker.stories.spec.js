import React from 'react';

import DatePicker from './DatePicker';
import DatePickerInput from './DatePickerInput';

export default {
  component: DatePicker,
  title: 'DatePicker',
};

export const DatePickerStory = () => (
  <div>
    {['small', 'medium', 'large'].map((size) => (
      <DatePicker key={size} size={size} marginBottom={4} selectedDate={new Date('1990-07-30')} onChange={() => {}} />
    ))}
  </div>
);

export const DatePickerInputStory = () => (
  <div>
    {['small', 'medium', 'large'].map((size) => (
      <DatePickerInput
        key={size}
        size={size}
        marginBottom={4}
        selectedDate={new Date('1990-07-30')}
        onChange={() => {}}
      />
    ))}
  </div>
);
