import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Box, TextBody } from '../../index';

export default {
  component: Box,
  title: 'Low level blocks / Box',

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
