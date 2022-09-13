import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Tag from './Tag';

export default {
  component: Tag,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Tag'),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A1784',
    },
  },
} as ComponentMeta<typeof Tag>;

export const Basic: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

Basic.args = {
  children: 'I am a tag',
  onRemoveClick: () => console.log('Tag removed'),
};
