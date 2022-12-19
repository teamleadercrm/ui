import React from 'react';
import { render } from '@testing-library/react';
import AvatarStack from '../AvatarStack';
import Avatar from '../Avatar';
import avatars from '../../../static/data/avatar';

describe('Component - AvatarStack', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <AvatarStack displayMax={3}>
        <Avatar imageUrl={avatars[0].image} fullName="Michael Scott" />
        <Avatar imageUrl={avatars[2].image} fullName="Dwight Schrute" />
        <Avatar imageUrl={avatars[3].image} fullName="Jim Halpert" />
        <Avatar imageUrl={avatars[4].image} fullName="Kevin Malone" />
        <Avatar imageUrl={avatars[5].image} fullName="Andy Bernard" />
      </AvatarStack>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
