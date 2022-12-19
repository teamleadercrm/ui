import React from 'react';
import { render } from '@testing-library/react';
import MarketingLink from '..';

describe('Component - MarketingLink', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingLink href="https://foobar.com">Foobar</MarketingLink>);
    expect(asFragment()).toMatchSnapshot();
  });
});
