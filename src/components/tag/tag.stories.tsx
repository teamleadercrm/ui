import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Tag from './Tag';

export default {
  component: Tag,
  title: 'Low level blocks / Tag',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LHH25GN90ljQaBEUNMsdJn/Desktop-components?node-id=3943%3A1784',
    },
  },
} as ComponentMeta<typeof Tag>;

export const Basic: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const WithColor: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

Basic.args = {
  children: 'I am a tag',
  onRemoveClick: () => console.log('Tag removed'),
};

WithColor.args = {
  children: 'Error state tag',
  backgroundColor: 'ruby',
  borderWidth: 1,
  borderColor: 'ruby',
  backgroundTint: 'lightest',
  color: 'ruby',
  onRemoveClick: () => console.log('Tag removed'),
};
