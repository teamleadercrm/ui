import React from 'react';
import { render } from '@testing-library/react';
import AvatarImage from '../AvatarImage';
import avatars from '../../../static/data/avatar';

describe('Component - AvatarImage', () => {
  it('renders', async () => {
    const { asFragment } = render(<AvatarImage image={avatars[0].image} imageAlt="John Doe" size="medium" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
