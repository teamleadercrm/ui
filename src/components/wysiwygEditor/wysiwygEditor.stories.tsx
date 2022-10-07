import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import WysiwygEditor from './WysiwygEditor';

export default {
  component: WysiwygEditor,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'WysiwygEditor'),
} as ComponentMeta<typeof WysiwygEditor>;

export const Basic: ComponentStory<typeof WysiwygEditor> = (args) => <WysiwygEditor {...args} />;

Basic.args = {
  placeholder: 'Placeholder text',
};
Basic.argTypes = {
  sucess: { control: 'text' },
  error: { control: 'text' },
  warning: { control: 'text' },
};
