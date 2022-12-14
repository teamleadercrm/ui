import React from 'react';
import { render } from '@testing-library/react';
import AdvancedCollapsible from '../AdvancedCollapsible';

describe('Component - AdvancedCollapsible', () => {
  it('renders', async () => {
    const { asFragment } = render(<AdvancedCollapsible title="Foo">Bar</AdvancedCollapsible>);
    expect(asFragment()).toMatchSnapshot();
  });
});
