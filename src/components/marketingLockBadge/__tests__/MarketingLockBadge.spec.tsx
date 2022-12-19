import React from 'react';
import { render } from '@testing-library/react';
import MarketingLockBadge from '..';

describe('Component - MarketingLockBadge', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingLockBadge />);
    expect(asFragment()).toMatchSnapshot();
  });
});
