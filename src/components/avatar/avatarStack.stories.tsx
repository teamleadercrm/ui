import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, AvatarStack } from '../../index';
import avatars from '../../static/data/avatar';

export default {
  component: AvatarStack,
  title: 'Mid level blocks / AvatarStack',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A1020',
    },
  },
} as ComponentMeta<typeof AvatarStack>;

export const DefaultStory: ComponentStory<typeof AvatarStack> = (args) => (
  <AvatarStack {...args} getNamesOverflowLabel={(amount) => `${amount} more`} size="medium">
    {[...avatars, ...avatars, ...avatars, ...avatars].map(({ image }, index) => (
      <Avatar key={index} imageUrl={image} fullName={`John Doe ${index}`} />
    ))}
  </AvatarStack>
);

DefaultStory.args = {
  displayMax: 5,
  tooltip: true,
};
