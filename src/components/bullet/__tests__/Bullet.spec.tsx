import React from 'react';
import { render } from '@testing-library/react';
import Bullet from '../Bullet';

describe('Component - Bullet', () => {
  it('renders', async () => {
    const { asFragment } = render(<Bullet />);
    expect(asFragment()).toMatchSnapshot();
  });
});
