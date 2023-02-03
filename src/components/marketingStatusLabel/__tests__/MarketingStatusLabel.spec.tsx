import React from 'react';
import { render } from '@testing-library/react';
import MarketingStatusLabel from '..';

describe('Component - MarketingStatusLabel', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingStatusLabel>Upgrade now</MarketingStatusLabel>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with an icon', async () => {
    const Icon = <span>Fake icon</span>;
    const screen = render(<MarketingStatusLabel icon={Icon}>Upgrade now</MarketingStatusLabel>);

    expect(screen.getByText('Fake icon')).toBeVisible();
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
