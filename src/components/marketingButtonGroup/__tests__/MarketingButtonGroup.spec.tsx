import React from 'react';
import { render } from '@testing-library/react';
import MarketingButtonGroup from '../';
import MarketingButton from '../../marketingButton';

describe('Component - ButtonGroup', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <MarketingButtonGroup value="button-1">
        <MarketingButton>Foo</MarketingButton>
        <MarketingButton>Bar</MarketingButton>
      </MarketingButtonGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
