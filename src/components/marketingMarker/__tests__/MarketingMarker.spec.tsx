import React from 'react';
import { render } from '@testing-library/react';
import MarketingMarker from '..';

describe('Component - MarketingMarker', () => {
  it('renders', async () => {
    const { asFragment } = render(<MarketingMarker>marker</MarketingMarker>);
    expect(asFragment()).toMatchSnapshot();
  });
});
