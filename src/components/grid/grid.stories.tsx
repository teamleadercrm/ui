import { ComponentStory } from '@storybook/react';
import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import { Grid, Box } from '../../index';
import { Heading3 } from '../typography';

export default {
  component: Grid,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Grid'),
};

export const basic: ComponentStory<typeof Grid> = (args) => (
  <Box>
    <Heading3>Grid Box</Heading3>
    <Box borderColor="neutral" borderWidth={1} borderRadius="rounded" backgroundColor="neutral" backgroundTint="light">
      <Grid {...args} />
    </Box>
  </Box>
);

basic.args = {
  areas: ['header header', 'sidebar content', 'footer footer'],
  rows: ['100px', '1fr', '50px'],
  columns: ['20%', '80%'],
};
