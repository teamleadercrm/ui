import React from 'react';
import { render } from '@testing-library/react';
import LoadingBar from '..';

describe('Component - LoadingBar', () => {
  it('renders', async () => {
    const { asFragment } = render(<LoadingBar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
