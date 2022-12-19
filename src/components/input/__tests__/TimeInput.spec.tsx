import React from 'react';
import { render } from '@testing-library/react';
import TimeInput from '../TimeInput';

describe('Component - TimeInput', () => {
  it('renders', async () => {
    const { asFragment } = render(<TimeInput />);
    expect(asFragment()).toMatchSnapshot();
  });
});
