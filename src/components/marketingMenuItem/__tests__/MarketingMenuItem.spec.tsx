import React from 'react';
import { render } from '@testing-library/react';
import MarketingMenuItem from '..';

describe('Component - MarketingMenuItem', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingMenuItem label="Buy me" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
