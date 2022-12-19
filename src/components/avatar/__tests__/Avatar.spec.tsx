import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';
import avatars from '../../../static/data/avatar';

describe('Component - Avatar', () => {
  it('renders', async () => {
    const { asFragment } = render(<Avatar imageUrl={avatars[0].image} fullName="John Doe" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
