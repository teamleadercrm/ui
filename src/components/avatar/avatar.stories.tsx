import React from 'react';
import { Avatar, Bullet } from '../../index';
import avatars from '../../static/data/avatar';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';

export default {
  component: Avatar,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'Avatar'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A1020',
    },
  },
};

export const DefaultStory = (args) => <Avatar {...args} />;

DefaultStory.args = {
  fullName: 'John Doe',
  id: '63227a3c-c80b-11e9-a32f-2a2ae2dbcce4',
  imageUrl: avatars[0].image,
};

export const WithBullet = () => (
  <Avatar imageUrl={avatars[0].image}>
    <Bullet borderColor="neutral" borderTint="lightest" color="ruby" />
  </Avatar>
);
