import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { text } from '@storybook/addon-knobs';
import EmailSelector from './EmailSelector';

export default {
  component: EmailSelector,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Form elements/EmailSelector'),

  parameters: {},
};

export const basic = () => (
  <EmailSelector
    warning={text('Warning', '')}
    error={text('Error', '')}
    defaultSelection={[{ email: 'info@teamleader.eu' }]}
  />
);
