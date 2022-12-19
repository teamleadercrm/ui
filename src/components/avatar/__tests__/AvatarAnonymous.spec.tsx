import React from 'react';
import { render } from '@testing-library/react';
import AvatarAnonymous from '../AvatarAnonymous';

describe('Component - AvatarAnonymous', () => {
  it('renders', async () => {
    const { asFragment } = render(<AvatarAnonymous size="medium" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
