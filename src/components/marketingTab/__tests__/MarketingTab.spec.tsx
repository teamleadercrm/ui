import React from 'react';
import { render } from '@testing-library/react';
import MarketingTab from '..';

describe('Component - MarketingTab', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingTab>Foobar</MarketingTab>);
    expect(asFragment()).toMatchSnapshot();
  });
});
