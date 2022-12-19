import React from 'react';
import { render } from '@testing-library/react';
import { MenuItem } from '..';

describe('Component - MenuItem', () => {
  it('renders', async () => {
    const { asFragment } = render(<MenuItem label="Michael Scott" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
