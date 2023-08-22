import React from 'react';

import Avatar from '../Avatar';
import avatars from '../../../static/data/avatar';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  component: Avatar,
  title: 'Avatar',
} as ComponentMeta<typeof Avatar>;

const Wrapper = ({ ...props }) => <div style={{ marginRight: '12px' }} {...props} />;

export const Main: ComponentStory<typeof Avatar> = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {(['tiny', 'small', 'medium', 'large', 'hero'] as const).map((size) => (
      <div key={size} style={{ marginBottom: '24px', display: 'flex' }}>
        <Wrapper>
          <Avatar size={size} imageUrl={avatars[0].image} shape="rounded" />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} imageUrl={avatars[0].image} shape="rounded" objectFit="contain" />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} imageUrl={avatars[1].image} />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} fullName="John Doe" />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} fullName="John Doe" id="1" />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} fullName="Lowie Benoot" id="2" />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} fullName="Teamleader Development" id="3" shape="rounded" />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} fullName="John Doe" creatable />
        </Wrapper>
        <Wrapper>
          <Avatar size={size} team />
        </Wrapper>
      </div>
    ))}
  </div>
);
