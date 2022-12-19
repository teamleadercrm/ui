import React from 'react';
import { render } from '@testing-library/react';
import { MarketingHeading2 } from '..';

describe('Component - MarketingTab', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingHeading2>Foobar</MarketingHeading2>);
    expect(asFragment()).toMatchSnapshot();
  });
});
