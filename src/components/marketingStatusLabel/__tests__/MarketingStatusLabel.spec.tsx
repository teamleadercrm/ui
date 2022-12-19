import React from 'react';
import { render } from '@testing-library/react';
import MarketingStatusLabel from '..';

describe('Component - MarketingStatusLabel', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingStatusLabel>Upgrade now</MarketingStatusLabel>);
    expect(asFragment()).toMatchSnapshot();
  });
});
