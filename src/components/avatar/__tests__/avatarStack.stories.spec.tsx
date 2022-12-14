import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from '../Avatar';
import AvatarStack from '../AvatarStack';
import avatars from '../../../static/data/avatar';

export default {
  component: AvatarStack,
  title: 'AvatarStack',
} as ComponentMeta<typeof AvatarStack>;

const Wrapper = ({ inverse = false, ...props }) => (
  <div style={{ padding: '6px', marginBottom: '24px', backgroundColor: inverse ? 'grey' : 'transparent' }} {...props} />
);

export const Main: ComponentStory<typeof AvatarStack> = () => (
  <div>
    {(['tiny', 'small', 'medium', 'large', 'hero'] as const).map((size) => (
      <div key={size}>
        <Wrapper>
          <AvatarStack size={size}>
            <Avatar imageUrl={avatars[0].image} />
            <Avatar imageUrl={avatars[2].image} />
            <Avatar imageUrl={avatars[3].image} />
            <Avatar imageUrl={avatars[4].image} />
            <Avatar imageUrl={avatars[5].image} />
          </AvatarStack>
        </Wrapper>
        <Wrapper>
          <AvatarStack size={size} displayMax={4}>
            <Avatar imageUrl={avatars[0].image} />
            <Avatar imageUrl={avatars[2].image} />
            <Avatar imageUrl={avatars[3].image} />
            <Avatar imageUrl={avatars[4].image} />
            <Avatar imageUrl={avatars[5].image} />
          </AvatarStack>
        </Wrapper>
        <Wrapper>
          <AvatarStack size={size} displayMax={4} selectable>
            <Avatar imageUrl={avatars[0].image} />
            <Avatar imageUrl={avatars[2].image} />
            <Avatar imageUrl={avatars[3].image} />
            <Avatar imageUrl={avatars[4].image} />
            <Avatar imageUrl={avatars[5].image} />
          </AvatarStack>
        </Wrapper>
        <Wrapper inverse>
          <AvatarStack size={size} displayMax={4} inverse>
            <Avatar imageUrl={avatars[0].image} />
            <Avatar imageUrl={avatars[2].image} />
            <Avatar imageUrl={avatars[3].image} />
            <Avatar imageUrl={avatars[4].image} />
            <Avatar imageUrl={avatars[5].image} />
          </AvatarStack>
        </Wrapper>
        <Wrapper>
          <AvatarStack size={size} direction="vertical">
            <Avatar imageUrl={avatars[0].image} />
            <Avatar imageUrl={avatars[2].image} />
            <Avatar imageUrl={avatars[3].image} />
            <Avatar imageUrl={avatars[4].image} />
            <Avatar imageUrl={avatars[5].image} />
          </AvatarStack>
        </Wrapper>
      </div>
    ))}
  </div>
);
