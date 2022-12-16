import React from 'react';
import { render } from '@testing-library/react';
import NumericInput from '../NumericInput';

describe('Component - NumericInput', () => {
  it('renders', async () => {
    const { asFragment } = render(<NumericInput value={20} min={0} max={100} step={10} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
