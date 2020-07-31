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

export const ClickableClosable = (args) => (
  <Tag {...args} onClick={() => console.log('Tag label clicked')} onRemoveClick={() => console.log('Tag removed')}>
    I am a clickable & closable tag
  </Tag>
);

ClickableClosable.storyName = 'Clickable & closable';

export const Clickable = () => <Tag onClick={() => console.log('Tag label clicked')}>I am a clickable tag</Tag>;

export const Closable = () => <Tag onRemoveClick={() => console.log('Tag removed')}>I am a closable tag</Tag>;

export const Basic = () => <Tag>I am a tag</Tag>;
