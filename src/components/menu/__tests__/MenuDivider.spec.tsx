import React from 'react';
import { render } from '@testing-library/react';
import { MenuDivider } from '..';

describe('Component - MenuDivider', () => {
  it('renders', async () => {
    const { asFragment } = render(<MenuDivider />);
    expect(asFragment()).toMatchSnapshot();
  });
});
