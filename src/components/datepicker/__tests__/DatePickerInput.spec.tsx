import React from 'react';
import { render } from '@testing-library/react';
import DatePickerInput from '../DatePickerInput';

describe('Component - DatePickerInput', () => {
  it('renders', async () => {
    const { asFragment } = render(<DatePickerInput selectedDate={new Date('1965-03-15')} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
