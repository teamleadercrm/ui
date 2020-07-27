import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { addStoryInGroup, LOW_LEVEL_BLOCKS } from '../../../.storybook/utils';
import Container from '../container';
import Box from '../box';

export default {
  component: Container,
  title: addStoryInGroup(LOW_LEVEL_BLOCKS, 'Container'),
  parameters: {
    info: {
      propTables: [Container],
    },
  },
};

export const basic = () => (
  <Box backgroundColor="gold" backgroundTint="lightest">
    <Container fixed={boolean('Fixed width', false)} backgroundColor="violet" backgroundTint="light">
      <Box backgroundColor="aqua" backgroundTint="light" style={{ height: 400 }} />
    </Container>
  </Box>
);
