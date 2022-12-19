import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '..';

describe('Component - LoadingSpinner', () => {
  it('renders', async () => {
    const { asFragment } = render(<LoadingSpinner />);
    expect(asFragment()).toMatchSnapshot();
  });
});
