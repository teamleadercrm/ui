import React from 'react';
import { render } from '@testing-library/react';
import AvatarInitials from '../AvatarInitials';

describe('Component - AvatarInitials', () => {
  it('renders', async () => {
    const { asFragment } = render(<AvatarInitials id="abc" name="Michael Scott" size="medium" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
