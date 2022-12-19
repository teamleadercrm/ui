import React from 'react';
import { render } from '@testing-library/react';
import DatePicker from '../DatePicker';

describe('Component - DatePicker', () => {
  it('renders', async () => {
    const { asFragment } = render(<DatePicker selectedDate={new Date('1965-03-15')} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
