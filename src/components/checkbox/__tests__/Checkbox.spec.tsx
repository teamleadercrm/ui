import React from 'react';
import { render } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('Component - Checkbox', () => {
  it('renders a checked checkbox', async () => {
    const { asFragment } = render(<Checkbox checked>Foobar</Checkbox>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an unchecked checkbox', async () => {
    const { asFragment } = render(<Checkbox>Foobar</Checkbox>);
    expect(asFragment()).toMatchSnapshot();
  });
});
