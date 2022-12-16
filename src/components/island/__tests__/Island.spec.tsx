import React from 'react';
import { render } from '@testing-library/react';
import Island from '../Island';

describe('Component - Island', () => {
  it('renders', async () => {
    const { asFragment } = render(<Island>Foobar</Island>);
    expect(asFragment()).toMatchSnapshot();
  });
});
