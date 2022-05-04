import React from 'react';
import { Avatar, AvatarStack } from '../../index';
import avatars from '../../static/data/avatar';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';

export default {
  component: AvatarStack,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'AvatarStack'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A1020',
    },
  },
};

export const DefaultStory = (args) => (
  <AvatarStack {...args}>
    {avatars.map(({ image }, index) => (
      <Avatar key={index} imageUrl={image} fullName={`John Doe ${index}`} />
    ))}
  </AvatarStack>
);

DefaultStory.args = {
  displayMax: 5,
};
