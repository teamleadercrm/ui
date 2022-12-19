import React from 'react';
import { render } from '@testing-library/react';
import { MarketingHeading1 } from '..';

describe('Component - MarketingTab', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingHeading1>Foobar</MarketingHeading1>);
    expect(asFragment()).toMatchSnapshot();
  });
});
