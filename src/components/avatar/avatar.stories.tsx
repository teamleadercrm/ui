import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, Bullet, TextBodyCompact } from '../../index';
import avatars from '../../static/data/avatar';

export default {
  component: Avatar,
  title: 'Mid level blocks / Avatar',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=225%3A1020',
    },
  },
} as ComponentMeta<typeof Avatar>;

export const DefaultStory: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

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

export const WithCustomTooltip: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

WithCustomTooltip.args = {
  tooltip: true,
  tooltipProps: {
    tooltip: <TextBodyCompact>Unassigned</TextBodyCompact>,
    tooltipSize: 'small',
  },
};
