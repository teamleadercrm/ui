import React from 'react';
import { render } from '@testing-library/react';
import AvatarStackOverflow from '../AvatarStackOverflow';
import Avatar from '../Avatar';
import avatars from '../../../static/data/avatar';

describe('Component - AvatarStackOverflow', () => {
  it('renders', async () => {
    const { asFragment } = render(
      <AvatarStackOverflow
        displayMax={5}
        overflowAmount={2}
        tooltip={false}
        overflowChildren={[
          <Avatar key={1} imageUrl={avatars[4].image} fullName="Kevin Malone" />,
          <Avatar key={2} imageUrl={avatars[5].image} fullName="Andy Bernard" />,
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
