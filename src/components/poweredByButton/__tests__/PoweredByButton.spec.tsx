import React from 'react';
import { render } from '@testing-library/react';
import PoweredByButton from '../PoweredByButton';

describe('Component - PoweredByButton', () => {
  it('renders', async () => {
    const { asFragment } = render(<PoweredByButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
