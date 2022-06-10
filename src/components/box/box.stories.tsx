import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Box, TextBody } from '../../index';

export default {
  component: Box,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Box'),

  parameters: {
    info: {
      propTablesExclude: [TextBody],
    },
  },
};

export const basic: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    <TextBody>I'm body text inside a Box component</TextBody>
  </Box>
);

basic.args = {
  backgroundColor: 'neutral',
  backgroundTint: 'light',
  padding: 3,
};
