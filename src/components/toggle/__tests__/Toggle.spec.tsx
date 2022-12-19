import React from 'react';
import { render } from '@testing-library/react';
import Toggle from '../Toggle';

describe('Component - Toggle', () => {
  it('renders', async () => {
    const { asFragment } = render(<Toggle />);
    expect(asFragment()).toMatchSnapshot();
  });
});
