import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import WysiwygEditor from './WysiwygEditor';

export default {
  component: WysiwygEditor,
  title: 'Mid level blocks / WysiwygEditor',
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
