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
};

export const Basic = (args) => (
  <Tag {...args} onRemoveClick={() => console.log('Tag removed')}>
    I am a tag
  </Tag>
);
