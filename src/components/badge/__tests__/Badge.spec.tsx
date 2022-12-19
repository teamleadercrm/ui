import React from 'react';
import { render } from '@testing-library/react';
import Badge from '../Badge';

describe('Component - Badge', () => {
  it('renders', async () => {
    const { asFragment } = render(<Badge>Foobar</Badge>);
    expect(asFragment()).toMatchSnapshot();
  });
});
