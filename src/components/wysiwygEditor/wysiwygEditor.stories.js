import React from 'react';
import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import WysiwygEditor from './WysiwygEditor';

export default {
  component: WysiwygEditor,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'WysiwygEditor'),
};

export const Basic = (args) => <WysiwygEditor {...args} />;

Basic.args = {
  placeholder: 'Placeholder text',
};
