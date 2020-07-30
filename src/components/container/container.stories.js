import React from 'react';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Container from '../container';
import Box from '../box';

export default {
  component: Container,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Container'),
};

export const Basic = (args) => (
  <Box backgroundColor="gold" backgroundTint="lightest">
    <Container {...args} backgroundColor="violet" backgroundTint="light">
      <Box backgroundColor="aqua" backgroundTint="light" style={{ height: 400 }} />
    </Container>
  </Box>
);
