import React from 'react';
import { render } from '@testing-library/react';
import DurationInput from '../DurationInput';

describe('Component - DurationInput', () => {
  it('renders', async () => {
    const { asFragment } = render(<DurationInput value={{ hours: 3, minutes: 45 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
