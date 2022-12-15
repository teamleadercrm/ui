import React from 'react';
import { render } from '@testing-library/react';
import AvatarOverlay from '../AvatarOverlay';

describe('Component - AvatarOverlay', () => {
  it('renders', async () => {
    const { asFragment } = render(<AvatarOverlay size="medium" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
