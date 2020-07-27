import React from 'react';
import { text } from '@storybook/addon-knobs';

import { addStoryInGroup, MID_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { WysiwygEditor } from '../../index';

export default {
  component: WysiwygEditor,
  title: addStoryInGroup(MID_LEVEL_BLOCKS, 'WysiwygEditor'),
};

export const wysiwygEditor = () => (
  <WysiwygEditor
    placeholder="Placeholder text"
    error={text('Error', '')}
    success={text('Success', '')}
    warning={text('Warning', '')}
    helpText={text('Help text', '')}
    width={text('Width', undefined)}
  />
);
