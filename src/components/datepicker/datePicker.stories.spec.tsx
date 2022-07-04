import React from 'react';

import DatePicker from './DatePicker';
import DatePickerInput, { Size } from './DatePickerInput';

const SIZE = ['small', 'medium', 'large'];

export default {
  component: DatePicker,
  title: 'DatePicker',
};

export const DatePickerStory = () => (
  <div>
    {SIZE.map((size) => (
      <DatePicker
        key={size}
        size={size as Size}
        marginBottom={4}
        selectedDate={new Date('1990-07-30')}
        onChange={() => {}}
      />
    ))}
  </div>
);

export const DatePickerInputStory = () => (
  <div>
    {SIZE.map((size) => (
      <DatePickerInput
        key={size}
        size={size as Size}
        marginBottom={4}
        selectedDate={new Date('1990-07-30')}
        onChange={() => {}}
      />
    ))}
  </div>
);
