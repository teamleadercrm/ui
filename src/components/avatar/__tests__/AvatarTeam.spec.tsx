import React from 'react';
import { render } from '@testing-library/react';
import AvatarTeam from '../AvatarTeam';

describe('Component - AvatarTeam', () => {
  it('renders', async () => {
    const { asFragment } = render(<AvatarTeam />);
    expect(asFragment()).toMatchSnapshot();
  });
});
