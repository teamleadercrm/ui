import React from 'react';
import { render } from '@testing-library/react';
import MarketingButton from '..';

describe('Component - MarketingButton', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingButton>button</MarketingButton>);
    expect(asFragment()).toMatchSnapshot();
  });
});
